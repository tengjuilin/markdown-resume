var ol_tags = document.getElementsByTagName('ol')

for (var i=0, max=ol_tags.length; i < max; i++) {
    ol_tags[i].setAttribute('reversed', 'reversed')
}

