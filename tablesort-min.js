/*
 *  Table Sort support
 *  Author:Ming
 *  Version:1.2.0
 *  Date:2014.09.30
 */
(function(d,t,w){function l(a,m,h){var b=d(a);if(1!==b.length)b.each(function(c){new l(c,m,h)});else{a=b.find("th").addClass(u);for(var e=0;e<a.length;e++)(function(c,a){d(c).click(function(){var e=d(c).find("."+n),f=0,k=n;0<e.length&&!e.hasClass(p)&&(f=1,k+=" "+p);b.find("."+n).remove();d(c).append('<span class="'+k+'"></span>');v(b,a,f,m,h)})})(a[e],e);this.$dom=b}}function v(a,m,h,b,e){var c=[],n=0,l=1,f=a.find("tbody tr").each(function(a){a=d(a).find("td");if(m<a.length){var b=a[m];a=d(b).text();
""===d.trim(a)&&(b=d(b).find("input"),0<b.length&&(b=b[0],"checked"in b?a=b.checked?1:0:"value"in b&&(a=b.value)));if(a===t||""===a||isNaN(a))l=0;c.push({i:n++,t:a})}}),k=1;for(;k<c.length;k++)for(var g=c.length-1;g>=k;g--){var q=c[g],r=c[g-1],s=l?parseFloat(q.t)<parseFloat(r.t):q.t<r.t;h&&(s=!s);s&&(c[g-1]=q,c[g]=r)}h=a.find("tbody");for(var p in c)d(f[c[p].i]).appendTo(h);if(e)for(g=f.length-e;g<f.length;g++)d(f[g]).appendTo(h);if(b)for(f=a.find("tbody tr").removeClass(b),a=0;a<f.length;a++)1===
a%2&&d(f[a]).addClass(b)}var u="table-sort-th",n="table-sort-arrow",p="table-sort-arrow-desc";window.TableSort=l})(Gnim,null);
