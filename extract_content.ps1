Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
$bookDir = "C:\Users\Hi\Desktop\human-ai-book\pages\book"

# Define the logical page order
$pageOrder = @()
$pageOrder += "introduction"
for ($i=2; $i -le 10; $i++) { $pageOrder += "introduction-$i" }
for ($ch=1; $ch -le 10; $ch++) {
    $pageOrder += "chapter-$ch"
    for ($i=2; $i -le 10; $i++) { $pageOrder += "chapter-$ch-$i" }
}

# Create a mapping from filename to page number
$pageMap = @{}
$counter = 1
foreach ($page in $pageOrder) {
    $pageMap[$page] = $counter
    $counter++
}

# Chapter titles
$chapterTitles = @{
    "introduction" = "Introduction: The Convergence of Human and Machine"
    "chapter-1" = "Chapter 1: The Birth of Artificial Intelligence"
    "chapter-2" = "Chapter 2: Early AI Systems and Symbolic Reasoning"
    "chapter-3" = "Chapter 3: The AI Winter and Renewed Hope"
    "chapter-4" = "Chapter 4: Machine Learning Revolution"
    "chapter-5" = "Chapter 5: Deep Learning and Neural Networks"
    "chapter-6" = "Chapter 6: Natural Language Processing"
    "chapter-7" = "Chapter 7: Computer Vision and Perception"
    "chapter-8" = "Chapter 8: Robotics and Embodied AI"
    "chapter-9" = "Chapter 9: Ethics and Bias in AI"
    "chapter-10" = "Chapter 10: The Future of Human-AI Collaboration"
}

# Extract content keywords from each page
$bookData = @()
$id = 1

foreach ($pageName in $pageOrder) {
    $filePath = Join-Path $bookDir "$pageName.tsx"
    if (-not (Test-Path $filePath)) { continue }
    
    $content = Get-Content $filePath -Raw
    
    # Extract the page number
    $pageNum = $pageMap[$pageName]
    
    # Determine chapter base name
    $chapterBase = $pageName
    if ($pageName -match "^(chapter-\d+)") {
        $chapterBase = $matches[1]
    } elseif ($pageName -match "^introduction") {
        $chapterBase = "introduction"
    }
    
    $chapterTitle = $chapterTitles[$chapterBase]
    if (-not $chapterTitle) { $chapterBase = $pageName; $chapterTitle = $pageName }
    
    # Extract keywords from content
    $keywords = @()
    
    # AI and technology terms
    $aiTerms = @("artificial intelligence", "AI", "machine learning", "deep learning", "neural networks", 
                 "natural language processing", "NLP", "computer vision", "robotics", "ethics", "bias",
                 "history", "future", "Turing", "algorithm", "data", "model", "training", "inference",
                 "supervised", "unsupervised", "reinforcement", "automation", "cognition", "intelligence",
                 "symbolic reasoning", "expert systems", "AGI", "human-AI", "collaboration")
    
    foreach ($term in $aiTerms) {
        if ($content -match [regex]::Escape($term)) {
            $keywords += $term
        }
    }
    
    # Add chapter-specific keywords
    if ($pageName -match "introduction") {
        $keywords += "introduction", "convergence", "human", "machine"
    }
    if ($pageName -match "chapter-1") {
        $keywords += "birth", "early", "Dartmouth", "1956"
    }
    if ($pageName -match "chapter-2") {
        $keywords += "symbolic", "reasoning", "systems"
    }
    if ($pageName -match "chapter-3") {
        $keywords += "winter", "renewed", "hope"
    }
    if ($pageName -match "chapter-4") {
        $keywords += "revolution", "machine learning"
    }
    if ($pageName -match "chapter-5") {
        $keywords += "deep", "neural", "networks"
    }
    if ($pageName -match "chapter-6") {
        $keywords += "language", "processing", "NLP"
    }
    if ($pageName -match "chapter-7") {
        $keywords += "vision", "perception"
    }
    if ($pageName -match "chapter-8") {
        $keywords += "robotics", "embodied"
    }
    if ($pageName -match "chapter-9") {
        $keywords += "ethics", "bias", "fairness"
    }
    if ($pageName -match "chapter-10") {
        $keywords += "future", "collaboration"
    }
    
    $bookData += [PSCustomObject]@{
        id = $id
        title = "$chapterTitle - Page $pageNum"
        chapter = $pageName
        page = $pageNum
        content = ($keywords -join " ")
    }
    $id++
}

# Output as JSON for the chatbot
$json = $bookData | ConvertTo-Json -Depth 10
Set-Content -Path "C:\Users\Hi\Desktop\human-ai-book\book-data.json" -Value $json -NoNewline
Write-Host "Book data created with $($bookData.Count) entries"