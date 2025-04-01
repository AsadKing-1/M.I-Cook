function openProductPage(title, description, imageUrl) {
    const htmlContent = `
        <html>
        <head>
            <meta charset="UTF-8">
            <title>M.I-Cook ${title}</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                img { max-width: 300px; border-radius: 10px; }
                .container { max-width: 600px; margin: auto; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${title}</h1>
                <img src="${imageUrl}" alt="${title}">
                <p>${description}</p>
                <button>Назад</button>
            </div>
        </body>
        </html>
    `;

    const blob = new Blob([new TextEncoder().encode(htmlContent)], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    window.open(url, "_blank");
}

document.getElementById("btn").addEventListener("click", function() {
    openProductPage(
        "Iphone 16e",
        "Лучший смартфон 2025 года с 200МП камерой!",
        "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16e__cubm3xoy5qaa_xlarge_2x.png"
    );
});
