$projectName = "portfolio"
$branchName = "main"
$repoName = "portfolio"

$env:VITE_REPO_NAME = $repoName

if (Test-Path "docs") {
    Remove-Item -Recurse -Force "docs"
}

npm run build

New-Item -ItemType Directory -Path "docs"

Copy-Item -Recurse -Force "dist/*" "docs/"

Remove-Item Env:VITE_REPO_NAME

git add .
git commit -m "deploy React SPA to GitHub Pages"
git push -u origin $branchName