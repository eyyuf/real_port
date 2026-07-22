import zlib
import re

def extract_text(pdf_path):
    with open(pdf_path, 'rb') as f:
        content = f.read()

    streams = re.findall(b'stream\r?\n(.*?)\r?\nendstream', content, re.DOTALL)
    text_pieces = []
    
    for s in streams:
        try:
            decompressed = zlib.decompress(s)
            # Find text inside TJ or Tj operators
            tjs = re.findall(rb'\((.*?)\)\s*T[jJ]', decompressed)
            for t in tjs:
                text_pieces.append(t.decode('utf-8', 'ignore'))
            # Also find array TJ operators
            arr_tjs = re.findall(rb'\[(.*?)\]\s*TJ', decompressed)
            for arr in arr_tjs:
                parts = re.findall(rb'\((.*?)\)', arr)
                text_pieces.append("".join(p.decode('utf-8', 'ignore') for p in parts))
        except Exception:
            pass

    return "\n".join(text_pieces)

parsed_text = extract_text("CV (1).pdf")
print("=== EXTRACTED CV TEXT ===")
print(parsed_text)
