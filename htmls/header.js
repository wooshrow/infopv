var header =
     '<div class="row"> <!-- row 1 -->' +
     '<div class="six columns">' +
	 '<img src="./images/PVpic.png" class="img-circle" height="30%" width="30%" >' +
	  '<h5>Course Program Semantics & Verification 2024/25</h5>' +
      '</div>' +
      '<div id="nav" class="six columns">' +
      '  <a mystyle="navbutton2" href="index.html">news</a> &nbsp; ' +
      '  <a mystyle="navbutton2" href="plan.html">course plan</a> &nbsp; ' +
      '  <a mystyle="navbutton2" href="https://osiris-student.uu.nl/onderwijscatalogus/extern/cursus?cursuscode=INFOMPSV&collegejaar=2024">info @/education</a>  &nbsp;' +
      '  <a mystyle="navbutton2" href="javascript:history.go(0)">refresh</a>' +
      '</div>' +
    '</div> <!-- row 1 -->'
    +
    '<div class="row"> <!-- row 2 -->' +
      '  <div class="twelve columns">' +
      '  <a class="button" href="material.html">Documentations</a>' +
      '  <a class="button" href="https://www.spinroot.com">Spin MC</a>' +
	  '  <a class="button" href="https://nusmv.fbk.eu/">NuSMV MC</a>' +
      '  <a class="button" href="https://www.cprover.org/cbmc/">CBMC MC</a>' +
      '  <a class="button" href="https://seahorn.github.io/">SeaHorn</a>' +
      '  <a class="button" href="https://www.cs.ox.ac.uk/projects/fdr/">FDR refinement checker</a>' +
      '  <a class="button" href="https://github.com/Z3Prover/z3">Z3 prover</a>' +
      '  <a class="button" href="https://hol-theorem-prover.org/">HOL theorem prover</a>' +
      '  <a class="button" href="https://hackage.haskell.org/package/z3">Z3 binding for Haskell</a>' +
	  '  </div>' +
    '</div> <!-- row 2 -->'
    ;

    document.getElementById("fixheader").innerHTML = header ;
