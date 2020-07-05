M.AutoInit();

tinymce.init({
  selector: '#mytextarea',
  plugins: "link image media",
  toolbar: "link image media" });


$.extend(M.Modal.prototype, {
  _handleFocus(e) {
    if (!this.el.contains(e.target) &&
    this._nthModalOpened === M.Modal._modalsOpen &&
    document.defaultView.getComputedStyle(e.target, null).zIndex < 1002) {
      this.el.focus();
    }
  } });
function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runit() { 
   var prog = document.getElementById("yourcode").value; 
   var mypre = document.getElementById("output"); 
   mypre.innerHTML = ''; 
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead}); 
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
       console.log(err.toString());
   });
} 

