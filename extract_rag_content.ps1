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

# Chapter descriptions for RAG
$chapterDescriptions = @{
    "introduction" = "The introduction explores the convergence of human and machine intelligence. It covers human cognitive processes, computational models, biological vs artificial intelligence, historical development, and current applications of AI."
    "chapter-1" = "Chapter 1 covers the birth of artificial intelligence, starting from the Dartmouth Workshop in 1956. It includes early AI systems, the Turing test, and the foundational concepts of machine intelligence."
    "chapter-2" = "Chapter 2 discusses early AI systems and symbolic reasoning. It covers rule-based systems, expert systems, knowledge representation, and the symbolic AI approach that dominated early AI research."
    "chapter-3" = "Chapter 3 explains the AI Winter periods when funding and interest in AI declined, followed by renewed hope with advances in computing power and new approaches to machine learning."
    "chapter-4" = "Chapter 4 covers the machine learning revolution, including supervised learning, unsupervised learning, decision trees, support vector machines, and the shift from rule-based to data-driven approaches."
    "chapter-5" = "Chapter 5 explores deep learning and neural networks, including multi-layer perceptrons, convolutional neural networks (CNNs), recurrent neural networks (RNNs), and deep learning breakthroughs in image and speech recognition."
    "chapter-6" = "Chapter 6 covers natural language processing (NLP), including tokenization, sentiment analysis, machine translation, transformers, BERT, GPT, and large language models."
    "chapter-7" = "Chapter 7 discusses computer vision and perception, including image recognition, object detection, facial recognition, optical character recognition (OCR), and applications in autonomous vehicles."
    "chapter-8" = "Chapter 8 explores robotics and embodied AI, including industrial robots, service robots, human-robot interaction, and the integration of AI with physical systems."
    "chapter-9" = "Chapter 9 addresses ethics and bias in AI, including algorithmic bias, fairness, transparency, accountability, privacy concerns, and the ethical implications of autonomous systems."
    "chapter-10" = "Chapter 10 discusses the future of human-AI collaboration, including artificial general intelligence (AGI), augmented intelligence, the future of work, and responsible AI development."
}

# Extract content for RAG
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
    $chapterDescription = $chapterDescriptions[$chapterBase]
    
    # Build rich content for RAG
    $ragContent = "$chapterTitle. $chapterDescription. This is page $pageNum of the book Human & AI: An Interactive Book."
    
    $bookData += [PSCustomObject]@{
        id = $id
        title = "$chapterTitle - Page $pageNum"
        chapter = $pageName
        page = $pageNum
        content = $ragContent
    }
    $id++
}

# Output as JSON
$json = $bookData | ConvertTo-Json -Depth 10
Set-Content -Path "C:\Users\Hi\Desktop\human-ai-book\book-data.json" -Value $json -NoNewline
Write-Host "Book data created with $($bookData.Count) entries for RAG"