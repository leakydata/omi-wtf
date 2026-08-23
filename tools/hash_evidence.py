#!/usr/bin/env python3
"""Create a deterministic SHA-256 manifest without modifying evidence files."""
from __future__ import annotations
import hashlib, json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EVIDENCE = ROOT / "public" / "evidence"
MANIFEST = ROOT / "evidence_manifest.json"

def digest(path: Path) -> str:
    hasher = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            hasher.update(chunk)
    return hasher.hexdigest()

files = [{"path": str(path.relative_to(ROOT)), "bytes": path.stat().st_size, "sha256": digest(path)} for path in sorted(EVIDENCE.rglob("*")) if path.is_file() and path.name != ".gitkeep"] if EVIDENCE.exists() else []
MANIFEST.write_text(json.dumps({"generated_at": datetime.now(timezone.utc).isoformat(), "files": files}, indent=2) + "\n", encoding="utf-8")
print(f"Indexed {len(files)} evidence file(s) in {MANIFEST.name}")
