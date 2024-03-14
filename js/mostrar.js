let laboral = document.getElementById('laboral');
let recursos = document.getElementById('recursos');
let fiscal = document.getElementById('fiscal');
let comptabilitat = document.getElementById('comptabilitat');
let societari = document.getElementById('societari');
let subvencions = document.getElementById('subvencions');
let acompanyament = document.getElementById('acompanyament');
let particulars = document.getElementById('particulars');

laboral.addEventListener('mouseover', function(){
    document.getElementById('labo').removeAttribute('hidden');
});
laboral.addEventListener('mouseout', function(){
    document.getElementById('labo').setAttribute('hidden', 'true');
});
recursos.addEventListener('mouseover', function(){
    document.getElementById('recurs').removeAttribute('hidden');
});
recursos.addEventListener('mouseout', function(){
    document.getElementById('recurs').setAttribute('hidden', 'true');
});
fiscal.addEventListener('mouseover', function(){
    document.getElementById('fisca').removeAttribute('hidden');
});
fiscal.addEventListener('mouseout', function(){
    document.getElementById('fisca').setAttribute('hidden', 'true');
});
comptabilitat.addEventListener('mouseover', function(){
    document.getElementById('compta').removeAttribute('hidden');
});
comptabilitat.addEventListener('mouseout', function(){
    document.getElementById('compta').setAttribute('hidden', 'true');
});
societari.addEventListener('mouseover', function(){
    document.getElementById('societar').removeAttribute('hidden');
});
societari.addEventListener('mouseout', function(){
    document.getElementById('societar').setAttribute('hidden', 'true');
});
subvencions.addEventListener('mouseover', function(){
    document.getElementById('subvencio').removeAttribute('hidden');
});
subvencions.addEventListener('mouseout', function(){
    document.getElementById('subvencio').setAttribute('hidden', 'true');
});
acompanyament.addEventListener('mouseover', function(){
    document.getElementById('acompanyamen').removeAttribute('hidden');
});
acompanyament.addEventListener('mouseout', function(){
    document.getElementById('acompanyamen').setAttribute('hidden', 'true');
});
particulars.addEventListener('mouseover', function(){
    document.getElementById('particula').removeAttribute('hidden');
});
particulars.addEventListener('mouseout', function(){
    document.getElementById('particula').setAttribute('hidden', 'true');
});