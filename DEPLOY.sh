#!/usr/bin/env bash
# ─────────────────────────────────────────────────────
#  One-time GitHub deployment script
#  Run: bash DEPLOY.sh
# ─────────────────────────────────────────────────────
set -e

REPO="https://github.com/M-Nouioua/M-Nouioua.github"

echo ""
echo "🚀  Portfolio → GitHub Pages"
echo "    Repo: $REPO"
echo ""
read -p "  Paste your GitHub Personal Access Token: " TOKEN
echo ""

REMOTE="https://${TOKEN}@github.com/M-Nouioua/M-Nouioua.github.git"

git remote add origin "$REMOTE" 2>/dev/null || git remote set-url origin "$REMOTE"
git push -u origin main --force

echo ""
echo "✅  Push complete!"
echo ""
echo "─────────────────────────────────────────────────────"
echo "  NOW: Enable GitHub Pages in repo Settings:"
echo "  Settings → Pages → Source: GitHub Actions"
echo "─────────────────────────────────────────────────────"
echo "  Your site will be live at:"
echo "  https://m-nouioua.github.io/M-Nouioua.github/"
echo "─────────────────────────────────────────────────────"
