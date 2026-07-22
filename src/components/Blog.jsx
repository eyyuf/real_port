import React, { useState, useEffect } from 'react';
import './Blog.css';

export default function Blog({ onBackToHome }) {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('eyyu_blog_posts');
    return saved ? JSON.parse(saved) : [];
  });

  const [activePost, setActivePost] = useState(null);
  const [showEditor, setShowEditor] = useState(false);

  // Admin Mode State (Unlocked via ?admin=true or Ctrl+Shift+B)
  const [isAdmin, setIsAdmin] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasAdminParam = urlParams.get('admin') === 'true' || window.location.hash === '#admin';
    const savedAdmin = localStorage.getItem('eyyu_admin_active') === 'true';
    if (hasAdminParam) {
      localStorage.setItem('eyyu_admin_active', 'true');
      return true;
    }
    return savedAdmin;
  });

  // New post form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    localStorage.setItem('eyyu_blog_posts', JSON.stringify(posts));
  }, [posts]);

  // Keyboard shortcut Ctrl + Shift + B to toggle Secret Admin Mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'B' || e.key === 'b')) {
        e.preventDefault();
        setIsAdmin((prev) => {
          const next = !prev;
          localStorage.setItem('eyyu_admin_active', next ? 'true' : 'false');
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handlePublish = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost = {
      id: Date.now(),
      title: newTitle.trim(),
      category: newCategory.trim() || 'Backend Engineering',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: `${Math.max(1, Math.ceil(newContent.split(' ').length / 150))} min read`,
      excerpt: newExcerpt.trim() || newContent.trim().substring(0, 120) + '...',
      content: newContent.trim()
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewCategory('');
    setNewExcerpt('');
    setNewContent('');
    setShowEditor(false);
  };

  const handleDeletePost = (id, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      const updated = posts.filter(p => p.id !== id);
      setPosts(updated);
      if (activePost && activePost.id === id) {
        setActivePost(null);
      }
    }
  };

  return (
    <div className="blog-page">
      <div className="container">
        {/* Header */}
        <div className="blog-page__header">
          <button onClick={onBackToHome} className="btn btn--secondary blog-page__back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Portfolio</span>
          </button>

          <div className="blog-page__titles">
            <span className="section__label">// BLOGS & ARTICLES</span>
            <h1 className="section__title">Eyyu's Engineering Blog</h1>
          </div>

          {/* Admin Write Button */}
          {isAdmin ? (
            <button onClick={() => setShowEditor(true)} className="btn btn--primary blog-page__write-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              <span>+ Write New Blog</span>
            </button>
          ) : (
            <div className="blog-page__reader-tag">Read-Only Mode</div>
          )}
        </div>

        {/* Article Reader View */}
        {activePost ? (
          <div className="blog-reader glass-card">
            <button onClick={() => setActivePost(null)} className="btn btn--secondary blog-reader__close">
              ← Back to All Blogs
            </button>
            <div className="blog-reader__meta">
              <span className="blog-card__tag">{activePost.category}</span>
              <span className="blog-card__date">{activePost.date} · {activePost.readTime}</span>
            </div>
            <h2 className="blog-reader__title">{activePost.title}</h2>
            <div className="blog-reader__body">
              {activePost.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : (
          /* Blog Grid List or Empty State */
          posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map((post) => (
                <div key={post.id} className="blog-card glass-card" onClick={() => setActivePost(post)}>
                  <div className="blog-card__meta">
                    <span className="blog-card__tag">{post.category}</span>
                    <span className="blog-card__date">{post.date}</span>
                  </div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__footer">
                    <span className="blog-card__readtime">{post.readTime}</span>
                    <div className="blog-card__actions">
                      <span className="blog-card__link">Read Article →</span>
                      {isAdmin && (
                        <button 
                          onClick={(e) => handleDeletePost(post.id, e)} 
                          className="blog-card__delete-btn"
                          title="Delete Post"
                        >
                          ✕ Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="blog-empty glass-card">
              <h3 className="blog-empty__title">No Blog Posts Published Yet</h3>
              <p className="blog-empty__text">
                {isAdmin 
                  ? "Click '+ Write New Blog' above to publish your first article!" 
                  : "Check back soon for new technical articles and posts."}
              </p>
            </div>
          )
        )}

        {/* Modal Editor Form (Admin Only) */}
        {showEditor && isAdmin && (
          <div className="blog-modal-backdrop" onClick={() => setShowEditor(false)}>
            <div className="blog-modal glass-card" onClick={(e) => e.stopPropagation()}>
              <div className="blog-modal__header">
                <h3 className="blog-modal__title">Write New Blog Post (Admin)</h3>
                <button onClick={() => setShowEditor(false)} className="blog-modal__close-btn">✕</button>
              </div>

              <form onSubmit={handlePublish} className="blog-form">
                <div className="blog-form__group">
                  <label className="blog-form__label">Article Title</label>
                  <input 
                    type="text" 
                    className="blog-form__input" 
                    placeholder="e.g. Building Scalable REST APIs with Express"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required 
                  />
                </div>

                <div className="blog-form__group">
                  <label className="blog-form__label">Category / Tag</label>
                  <input 
                    type="text" 
                    className="blog-form__input" 
                    placeholder="e.g. Backend Engineering, Node.js"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                </div>

                <div className="blog-form__group">
                  <label className="blog-form__label">Short Excerpt (Summary)</label>
                  <input 
                    type="text" 
                    className="blog-form__input" 
                    placeholder="Brief 1-sentence overview"
                    value={newExcerpt}
                    onChange={(e) => setNewExcerpt(e.target.value)}
                  />
                </div>

                <div className="blog-form__group">
                  <label className="blog-form__label">Article Content</label>
                  <textarea 
                    className="blog-form__textarea" 
                    rows="8" 
                    placeholder="Write your article content here..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    required
                  />
                </div>

                <div className="blog-form__actions">
                  <button type="button" onClick={() => setShowEditor(false)} className="btn btn--secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn--primary">
                    Publish Article
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
