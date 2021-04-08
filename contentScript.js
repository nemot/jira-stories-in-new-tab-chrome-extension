window.openInATabIfRequired = function(e) {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    window.open( e.currentTarget.getAttribute('href') , '_blank' )
  }
}
if (document.body.id == "jira") {
  setInterval(function() {
    for(let link of document.getElementsByClassName('issue-link')) {
      link.removeEventListener('click', openInATabIfRequired);
      link.addEventListener('click', openInATabIfRequired);
    }
  }, 500)
  
}

