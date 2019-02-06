var tagName = 'audio-371'
var id = 'audio-371'

function ReplaceAudio(tagName, id) {
  this.tagName = tagName
  this.id = id

  if (!this.simpleCheck()) return

  this.getOpts()

  this.replaceDom()

  this.initAPlayer()
}

ReplaceAudio.prototype.simpleCheck = function() {
  var audios = $(this.tagName)
  var ret = audios && audios.length
  ret && (this.dom = audios[0])
  return ret
}

ReplaceAudio.prototype.getOpts = function() {
  this.opts = this.dom.dataset.opts.split(' || ').map(function(optStr) {
    var opt = {}
    optStr.split(' | ').forEach(function(str) {
      var ary = str.trim().split('=')
      opt[ary[0]] = ary[1]
    })
    return opt
  })
}

ReplaceAudio.prototype.replaceDom = function() {
  var parentP = this.dom.parentElement
  $(parentP).replaceWith('<div id="' + this.id + '"></div>')
}

ReplaceAudio.prototype.initAPlayer = function() {
  new APlayer({
    container: $('#' + this.id)[0],
    audio: this.opts
  })
}

new ReplaceAudio(tagName, id)
