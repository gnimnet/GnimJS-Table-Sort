/*
 *  Table Sort support
 *  Author:Ming
 *  Version:1.1.0
 *  Date:2012.02.12
 */
(function(d){function h(a,i){var f=d(a);if(1!=f.length)f.each(function(c){new h(c,i)});else{for(var e=f.find("th").addClass(p),c=0;c<e.length;c++)(function(c,a){d(c).click(function(){var g=d(c).find("."+j),e=0,b=j;0<g.length&&!g.hasClass(k)&&(e=1,b+=" "+k);f.find("."+j).remove();d(c).append('<span class="'+b+'"></span>');q(f,a,e,i)})})(e[c],c);this.$dom=f}}function q(a,i,f,e){var c=[],j=0,h=1,g=a.find("tbody tr").each(function(a){a=d(a).find("td");if(i<a.length){var b=a[i],a=d(b).text();""==d.trim(a)&&
(b=d(b).find("input"),0<b.length&&(b=b[0],"checked"in b?a=b.checked?1:0:"value"in b&&(a=b.value)));null!=a&&""!=a&&!isNaN(a)||(h=0);c.push({i:j++,t:a})}}),l=1;for(;l<c.length;l++)for(var b=c.length-1;b>=l;b--){var m=c[b],n=c[b-1],o=h?parseFloat(m.t)<parseFloat(n.t):m.t<n.t;f&&(o=!o);o&&(c[b-1]=m,c[b]=n)}for(var k in c)d(g[c[k].i]).appendTo(a.find("tbody"));if(e){g=a.find("tbody tr").removeClass(e);for(a=0;a<g.length;a++)1==a%2&&d(g[a]).addClass(e)}}var p="table-sort-th",j="table-sort-arrow",k="table-sort-arrow-desc";
window.TableSort=h})(Gnim);
