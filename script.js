const correctPassword = 'nigger';  // Set the password to "password"

document.getElementById('submitPasswordButton').addEventListener('click', function() {
    const enteredPassword = document.getElementById('passwordInput').value;
    if (enteredPassword === correctPassword) {
        document.getElementById('downloadSection').style.display = 'block';
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('submitPasswordButton').style.display = 'none';
        document.getElementById('passwordHint').style.display = 'none';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = '/New Folder/cysx.docx';  // Update with your document's path
    link.download = 'cysx.docx';  // Update with your document's name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
