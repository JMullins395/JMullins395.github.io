async function getInsult() {
    // change to grab a separate "generated insult" that will go inside "insult-generator"
    const insultGenerator = document.getElementById('insult-generator');
    // make a button
    try {
        const response = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json');

        if (!response.ok) {
            throw new Error('Ran into a problem.');
        }

        // remember to parse as json here if the built in doesn't work for some reason
        // also refer to specific element names to figure out what to display to which elements.
        const data = await response;
        insultGenerator = data.sdfghgfdf
    }
}