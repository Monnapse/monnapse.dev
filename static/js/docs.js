/*

*/

function openNote(clicked) {
    var note = clicked.parentNode;
    var noteContent = note.getElementsByClassName("note-content")[0];
    var arrow = note.getElementsByClassName("note-arrow")[0];
    noteContent.classList.toggle("show");
    arrow.classList.toggle("rotate-arrow");
}

function openDirectory(clicked) {
    var folder = clicked.parentNode;
    var folderContent = folder.getElementsByClassName("folder-content")[0];
    var arrow = folder.getElementsByClassName("folder-arrow")[0];
    folderContent.classList.toggle("show");
    arrow.classList.toggle("rotate-folder-arrow");
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
  

document.addEventListener('DOMContentLoaded', function () { // Add functionality to all code blocks 
    var codeBlocks = document.querySelectorAll('pre code'); 
    codeBlocks.forEach(function (codeBlock) { // Create styling
        var mainDiv = document.createElement('div');
        mainDiv.className = 'main-code-block-div';

        var copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';

        codeBlock.parentNode.insertBefore(mainDiv, codeBlock);
        mainDiv.appendChild(copyButton);

        copyButton.onclick = function () { // Copy code to the clipboard 
            var codeToCopy = codeBlock.textContent; 
            
            copyTextToClipboard(codeToCopy);
        };
    });
});




