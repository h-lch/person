(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-lajitong" viewBox="0 0 1024 1024">'+""+'<path d="M812.07296 423.66976c-0.65536-4.03456-3.11296-7.9872-6.81984-11.776-29.83936 30.3104-149.83168 35.34848-293.31456 35.34848s-263.39328-5.03808-293.33504-35.34848c-3.6864 3.7888-5.98016 7.74144-6.81984 11.776l-0.26624 0 0.08192 2.17088c0 0.24576-0.08192 0.512-0.08192 0.75776 0 0.6144 0.16384 1.10592 0.26624 1.69984l23.3472 478.5152 0.06144 0c2.06848 37.49888 45.03552 94.22848 276.76672 94.22848 231.75168 0 274.75968-56.7296 276.7872-94.22848l0.16384 0 23.38816-478.5152c0.04096-0.57344 0.24576-1.08544 0.24576-1.69984 0-0.24576-0.2048-0.512-0.2048-0.75776l0.2048-2.17088L812.07296 423.66976z"  ></path>'+""+'<path d="M654.7456 173.21984 654.7456 60.23168c0-20.39808-16.6912-37.23264-37.21216-37.23264L393.91232 22.99904c-20.39808 0-37.15072 16.83456-37.15072 37.23264l0 114.2784c-110.55104 12.53376-186.22464 37.90848-186.22464 67.31776l0 55.86944c0 11.44832 11.59168 22.34368 32.41984 32.17408 54.53824 25.62048 172.42112 43.37664 309.00224 43.37664 136.704 0 254.52544-17.75616 309.12512-43.37664 20.6848-9.8304 32.39936-20.72576 32.39936-32.17408l0-55.86944C853.46304 211.41504 771.95264 185.18016 654.7456 173.21984zM428.2368 168.52992l-9.4208 0.6144L418.816 122.30656c0-20.43904 2.84672-37.21216 6.22592-37.21216 3.4816 0 23.01952 0 43.49952 0l74.50624 0c20.39808 0 39.99744 0 43.4176 0 3.44064 0 6.2464 16.77312 6.2464 37.21216l0 46.05952c-25.9072-1.3312-52.85888-2.19136-80.75264-2.19136C483.04128 166.17472 454.9632 167.03488 428.2368 168.52992z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-duigou" viewBox="0 0 1024 1024">'+""+'<path d="M932.745135 227.204675c-34.392298-34.359552-90.173742-34.359552-124.588553 0L427.32704 608.055706 213.796806 394.773112c-34.414811-34.359552-90.196255-34.359552-124.588553 0-34.415834 34.369785-34.415834 90.072435 0 124.443243L365.088534 794.748712c34.393321 34.358529 90.174766 34.358529 124.589576 0l443.068048-443.11205c34.412764-34.359552 34.412764-90.073458-0.001023-124.431987z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)