(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(333)},127:function(e,t,a){},128:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(115),c=a.n(s),i=(a(127),a(2)),l=a(3),o=a(5),u=a(4),m=a(6),h=(a(128),a(11)),d=a(16),b=a(116),f=a.n(b),v=(a(129),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={button_visible:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.img,s=t.artist,c=t.album,i=t.message,l=t.handleClick;return r.a.createElement("div",{className:"search-track",onMouseEnter:function(){return e.setState({button_visible:!0})},onMouseLeave:function(){return e.setState({button_visible:!1})},onClick:function(){return l()}},r.a.createElement("div",{className:"search-img"},r.a.createElement("img",{src:n,alt:"track",width:200,height:200}),r.a.createElement("button",null,i)),r.a.createElement("h4",null,a),r.a.createElement("p",null,s,r.a.createElement("br",null),r.a.createElement("i",null,c)))}}]),t}(r.a.Component));v.defaultProps={handleClick:function(){}};var p=v,g=a(121),E=a(117),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={colors:{anger:"#FF6833",contempt:"#B313C6",disgust:"#17DF1A",fear:"#FF2D9F",happiness:"#29FFFC",neutral:"#A8A8A8",sadness:"#337DFF",surprise:"#D3FF0E"}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getData",value:function(){for(var e=this.props.emotions,t=[],a=[],n=[],r=[],s=0,c=Object.entries(e);s<c.length;s++){var i=c[s],l=Object(g.a)(i,2),o=l[0],u=l[1],m=o[0].toUpperCase()+o.slice(1);parseFloat(u)>0&&(t.push(m),a.push(parseFloat(u)),n.push(this.state.colors[o]),r.push(this.state.colors[o]))}return{labels:t,datasets:[{data:a,backgroundColor:n,hoverBackgroundColor:r}]}}},{key:"render",value:function(){var e={backgroundImage:this.props.background||""};return r.a.createElement("div",{className:"doughnut"},r.a.createElement(E.a,{style:e,data:this.getData(),options:{responsive:!0,maintainAspectRatio:!0,legend:{position:"bottom"}}}))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={emotions:{},notes:"",tracks:[],chosenTrack:"",photo:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.emotion,t=this.props.photo;this.setState({emotions:e,photo:t})}},{key:"updateNotes",value:function(e){this.setState({notes:e})}},{key:"handleSubmit",value:function(e){e.preventDefault();this.setState({tracks:[{url:"https://open.spotify.com/track/0m3Ze0cy8qBHSsV2exAfCw",id:"0m3Ze0cy8qBHSsV2exAfCw",artist:"Kanye West",album:"808s & Heartbreak",images:[{height:640,url:"https://i.scdn.co/image/353e99e5ff167272c245412b52d84bc36185b58d",width:640},{height:300,url:"https://i.scdn.co/image/e813e06978f72b9c965957b1b9789e98e1b2458b",width:300},{height:64,url:"https://i.scdn.co/image/9eb5ba8c3b1f6877482bb9c3c59fb602c2d27b8a",width:64}],name:"Amazing"},{url:"https://open.spotify.com/track/2Guz1b911CbpG8L92cnglI",id:"2Guz1b911CbpG8L92cnglI",artist:"The Red Jumpsuit Apparatus",album:"Don't You Fake It",images:[{height:640,url:"https://i.scdn.co/image/548908d2362b623aab6082f15229c9c842aeca28",width:640},{height:300,url:"https://i.scdn.co/image/095f419e80211337918a5adfe388215aad51afed",width:300},{height:64,url:"https://i.scdn.co/image/707f50c34dcf1f3ee808202267e675701624a78b",width:64}],name:"Your Guardian Angel"},{url:"https://open.spotify.com/track/03XfngWwNfhEjrnEga73Rg",id:"03XfngWwNfhEjrnEga73Rg",artist:"Dreamville",album:"Revenge Of The Dreamers III",images:[{height:640,url:"https://i.scdn.co/image/252556031aa69d3a5bbeab84fbb2b5ea0429f8b9",width:640},{height:300,url:"https://i.scdn.co/image/be7ca2d4abb2c1b30bae57b9fa5ebd8c4146849d",width:300},{height:64,url:"https://i.scdn.co/image/de35dd1481efb2c6ab362c43272beb5836ff6a3b",width:64}],name:'Swivel (with EARTHGANG) - From The Upcoming Album "Mirrorland"'},{url:"https://open.spotify.com/track/6gSw5vz7dcafda23VqMrnl",id:"6gSw5vz7dcafda23VqMrnl",artist:"Kevin Abstract",album:"American Boyfriend: A Suburban Love Story",images:[{height:640,url:"https://i.scdn.co/image/ade6313dfbf59562a5210f464b14b0eca026b85c",width:640},{height:300,url:"https://i.scdn.co/image/f9a1d3214f017569e2224fb69967af8c5ba0ffe0",width:300},{height:64,url:"https://i.scdn.co/image/b9c26bb99e986b5a0ae2bf7040fa6cac727b0dc1",width:64}],name:"Empty"},{url:"https://open.spotify.com/track/6J7cSyvSCnPwv3vqHchEfL",id:"6J7cSyvSCnPwv3vqHchEfL",artist:"A Day To Remember",album:"Homesick",images:[{height:640,url:"https://i.scdn.co/image/0c15cbab6487c63f7fcb9fc4b485a8a4377687e1",width:640},{height:300,url:"https://i.scdn.co/image/8f565b89d44d691cb6e80da06af6515ab55a69a9",width:300},{height:64,url:"https://i.scdn.co/image/7930e4627bcb01097a9583aa7c6938ab7b97fa76",width:64}],name:"If It Means a Lot to You"}]})}},{key:"saveEntry",value:function(e){var t=this.state;t.notes,t.photo,t.emotions}},{key:"render",value:function(){var e=this,t=this.state.tracks.map(function(e,t){var a=e.name,n=e.images,s=e.artist,c=e.album,i=e.url,l=n.length>0?n[0].url:"https://www.placecage.com/280/280";return r.a.createElement("div",{className:"recommendation-track",key:t},r.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(p,{name:a,img:l,artist:s,album:c,message:"Listen"})),r.a.createElement("button",{onClick:function(){return console.log("cheese")}},"Save"))});return r.a.createElement("div",{className:"emotion-graph"},r.a.createElement("img",{src:this.state.photo,alt:"journal face"}),r.a.createElement(y,{emotions:this.state.emotions,background:this.state.photo}),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("legend",null,"Today's Highlights"),r.a.createElement("textarea",{placeholder:"Today I...",onChange:function(t){return e.updateNotes(t.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",null,"Find Track")),this.state.tracks&&r.a.createElement("h3",null,"Recommendations"),r.a.createElement("div",{className:"recommendation-list"},t))}}]),t}(r.a.Component),w=(a(224),a(225),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={emotions:{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.entry,t={anger:e.anger,contempt:e.contempt,disgust:e.disgust,fear:e.fear,happiness:e.happiness,neutral:e.neutral,sadness:e.sadness,surprise:e.surprise};this.setState({emotions:t})}},{key:"render",value:function(){var e=this,t=this.props.entry.song.url.replace("track","embed/track");return r.a.createElement("div",null,this.props.calendar&&r.a.createElement("button",{onClick:function(){return e.props.resetCalendar()}},"Return to Calendar"),r.a.createElement("div",{className:"entry"},r.a.createElement("img",{src:this.props.entry.img,alt:"daily face"}),r.a.createElement("div",{className:"donut"},r.a.createElement(y,{emotions:this.state.emotions}),r.a.createElement("iframe",{title:"spotify",src:t,frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}))),r.a.createElement("div",{className:"entry-notes"},r.a.createElement("h3",null,"Notes:"),this.props.entry.notes))}}]),t}(r.a.Component)),O=r.a.createContext({entry:{},setEntry:function(){}}),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={photo:"",error:"",analyzedPhoto:"",emotion:{},entry:{},artistSeeds:[],trackSeeds:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onTakePhoto",value:function(e){this.setState({photo:e})}},{key:"onClickPhoto",value:function(e){this.setState({current:Number(e)})}},{key:"deletePhoto",value:function(){this.setState({photo:"",error:""})}},{key:"analyzePhoto",value:function(){this.setState({error:"",emotion:{anger:0,contempt:0,disgust:0,surprise:1},analyzedPhoto:"http://res.cloudinary.com/dsxx6cuel/image/upload/v1565676670/a3dmcn59k1znzx5euzbf.png"})}},{key:"renderPhotoDisplay",value:function(){var e=this,t=this.context,a=t.artists,n=t.tracks,s=this.state.photo;return 0===a.length&&0===n.length?r.a.createElement("div",{className:"warning"},r.a.createElement("h3",null,"Please add seeds in Preferences tab before starting")):s?r.a.createElement("div",{className:"current-img"},r.a.createElement("div",{className:"hidden"}),r.a.createElement("img",{width:768,src:s,alt:"current"}),r.a.createElement("button",{className:"analyze-img",onClick:function(){return e.analyzePhoto()}},"Analyze"),r.a.createElement("button",{className:"delete-img",onClick:function(){return e.deletePhoto()}},"Delete")):r.a.createElement("div",{className:"photo-booth"},r.a.createElement(f.a,{onTakePhoto:function(t){return e.onTakePhoto(t)}}))}},{key:"renderView",value:function(e){return Object.keys({})>0?r.a.createElement(w,null):Object.keys(this.state.emotion).length>0?r.a.createElement(k,{emotion:this.state.emotion,photo:this.state.analyzedPhoto}):r.a.createElement("div",{className:"camera"},r.a.createElement("h2",null,"Mood"),this.renderPhotoDisplay())}},{key:"render",value:function(){var e=this.context;return r.a.createElement("section",{className:"camera-page"},this.renderView(e))}}]),t}(r.a.Component);j.contextType=O;var N=j;a(226);var C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=r.a.createElement(N,null);return r.a.createElement("div",null,e)}}]),t}(r.a.Component),S=a(9),D=a.n(S),M=(a(329),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentMonth:new Date,selectedDate:new Date},a.onDateClick=function(e){a.setState({selectedDate:e}),a.props.handleClickDay(e.toString().slice(0,15))},a.nextMonth=function(){a.setState({currentMonth:D.a.addMonths(a.state.currentMonth,1)})},a.prevMonth=function(){a.setState({currentMonth:D.a.subMonths(a.state.currentMonth,1)})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderHeader",value:function(){return r.a.createElement("div",{className:"header row flex-middle"},r.a.createElement("div",{className:"col col-start"},r.a.createElement("div",{className:"icon",onClick:this.prevMonth},"last month")),r.a.createElement("div",{className:"col col-center"},r.a.createElement("span",null,D.a.format(this.state.currentMonth,"MMMM YYYY"))),r.a.createElement("div",{className:"col col-end",onClick:this.nextMonth},r.a.createElement("div",{className:"icon"},"next month")))}},{key:"renderDays",value:function(){for(var e=[],t=D.a.startOfWeek(this.state.currentMonth),a=0;a<7;a++)e.push(r.a.createElement("div",{className:"col col-center",key:a},D.a.format(D.a.addDays(t,a),"dddd")));return r.a.createElement("div",{className:"days row"},e)}},{key:"renderCells",value:function(){for(var e=this,t=this.state,a=t.currentMonth,n=t.selectedDate,s=D.a.startOfMonth(a),c=D.a.endOfMonth(s),i=D.a.startOfWeek(s),l=D.a.endOfWeek(c),o=[],u=[],m=i,h="";m<=l;){for(var d=function(t){h=D.a.format(m,"D");var a=m,c=m.toString().slice(0,15),i=(e.props.entries[c]||{}).img;u.push(r.a.createElement("div",{className:"col cell ".concat(D.a.isSameMonth(m,s)?D.a.isSameDay(m,n)?"selected":"":"disabled"),key:m,onClick:function(){return e.onDateClick(D.a.parse(a))}},i&&r.a.createElement("img",{className:"calendar-thumbnail",src:i,alt:"face for the day"}),r.a.createElement("span",{className:"number"},h),r.a.createElement("span",{className:"bg"},h))),m=D.a.addDays(m,1)},b=0;b<7;b++)d();o.push(r.a.createElement("div",{className:"row",key:m},u)),u=[]}return r.a.createElement("div",{className:"body"},o)}},{key:"render",value:function(){return r.a.createElement("div",{className:"calendar"},this.renderHeader(),this.renderDays(),this.renderCells())}}]),t}(r.a.Component)),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={value:new Date,entries:{},currentDay:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClickDay",value:function(e){this.setState({currentDay:e}),console.log(e)}},{key:"resetCalendar",value:function(){this.setState({currentDay:""})}},{key:"componentDidMount",value:function(){}},{key:"renderCalendar",value:function(){var e=this;return r.a.createElement(M,{handleClickDay:function(t){return e.handleClickDay(t)},entries:this.state.entries})}},{key:"renderEntryPage",value:function(){var e=this,t=this.state,a=t.entries,n=t.currentDay;return r.a.createElement(w,{calendar:!0,entry:a[n],resetCalendar:function(){return e.resetCalendar()}})}},{key:"render",value:function(){var e=this.state,t=e.entries,a=e.currentDay;return r.a.createElement("section",{className:"calendar-page"},t[a]?this.renderEntryPage():this.renderCalendar())}}]),t}(r.a.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={button_visible:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.img,s=t.message,c=t.handleClick;return r.a.createElement("div",{className:"search-artist",onMouseEnter:function(){return e.setState({button_visible:!0})},onMouseLeave:function(){return e.setState({button_visible:!1})},onClick:function(){return c()}},r.a.createElement("div",{className:"search-img"},r.a.createElement("img",{src:n,alt:"artist",width:200,height:200}),this.state.button_visible&&r.a.createElement("button",null,s)),r.a.createElement("h4",null,a))}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={artists:[],tracks:[],view:"artists",error:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.context,t=e.tracks,a=e.artists;this.setState({tracks:t,artists:a})}},{key:"handleClick",value:function(e,t){if("artist"===e){var a=this.state.artists.filter(function(e){return e.id!==t});this.setState({artists:a})}else{var n=this.state.tracks.filter(function(e){return e.id!==t});this.setState({tracks:n})}}},{key:"clickView",value:function(e){this.setState({view:e})}},{key:"renderView",value:function(){var e=this,t=this.state.artists.map(function(t,a){var n=t.name,s=t.id,c=t.img;return r.a.createElement(A,{key:a,name:n,img:c,id:t.id,message:"Delete",handleClick:function(){return e.handleClick("artist",s)}})}),a=this.state.tracks.map(function(t,a){var n=t.name,s=t.img,c=t.id,i=t.artist,l=t.album;return r.a.createElement(p,{key:a,name:n,img:s,id:c,artist:i,album:l,message:"Delete",handleClick:function(){return e.handleClick("track",c)}})});return"artists"===this.state.view?r.a.createElement("div",{className:"vibes-list"},t):r.a.createElement("div",{className:"vibes-list"},a)}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"saved-vibes"},r.a.createElement("nav",{className:"seed-toggle"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return e.clickView("artists")}},"Artists")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return e.clickView("tracks")}},"Tracks")))),r.a.createElement("br",null),this.state.error,this.renderView())}}]),t}(r.a.Component),_=P;P.contextType=O;var x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={keyword:"",artists:[],tracks:[],view:"artists"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateKeyword",value:function(e){this.setState({keyword:e})}},{key:"handleSearch",value:function(e){e.preventDefault();this.state.keyword}},{key:"addArtist",value:function(e,t,a){var n=this.state.artists.filter(function(e){return e.id!==t});console.log(t),this.setState({artists:n})}},{key:"addTrack",value:function(e,t,a,n,r){var s=this.state.tracks.filter(function(e){return e.id!==t});this.setState({tracks:s})}},{key:"clickView",value:function(e){this.setState({view:e})}},{key:"renderView",value:function(){var e=this,t=this.state.artists.map(function(t,a){var n=t.name,s=t.id,c=t.images,i=c.length>0?c[0].url:"https://www.placecage.com/280/280";return r.a.createElement(A,{key:a,name:n,img:i,id:t.id,message:"Save",handleClick:function(){return e.addArtist(n,s,i)}})}),a=this.state.tracks.map(function(t,a){var n=t.name,s=t.images,c=t.id,i=t.artist,l=t.album,o=s.length>0?s[0].url:"https://www.placecage.com/300/300";return r.a.createElement(p,{key:a,name:n,img:o,id:c,artist:i,album:l,message:"Save",handleClick:function(){return e.addTrack(n,c,o,i,l)}})});return"artists"===this.state.view?r.a.createElement("div",{className:"vibes-list"},t):r.a.createElement("div",{className:"vibes-list"},a)}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"search-vibes"},r.a.createElement("form",{className:"add-vibe",onSubmit:function(t){return e.handleSearch(t)}},r.a.createElement("label",{htmlFor:"vibe"},"Want Facejams based on music you like? ",r.a.createElement("br",null),"Save your artist/track preferences here."),r.a.createElement("br",null),r.a.createElement("input",{id:"vibe",name:"vibe",type:"text",placeholder:"Find your favorite songs or artists",onChange:function(t){return e.updateKeyword(t.target.value)}}),r.a.createElement("button",null,"Search")),r.a.createElement("nav",{className:"seed-toggle"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return e.clickView("artists")}},"Artists")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return e.clickView("tracks")}},"Tracks")))),this.renderView())}}]),t}(r.a.Component),L=(a(330),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"vibes"},r.a.createElement("div",{className:"vibes-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/vibes/"},"Find Vibes")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/vibes/saved"},"My Vibes")))),r.a.createElement("div",{className:"vibes-main"},r.a.createElement(d.a,{exact:!0,path:"/vibes/",component:x}),r.a.createElement(d.a,{path:"/vibes/saved",component:_})))}}]),t}(r.a.Component)),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a.handleSubmitJwtAuth=function(e){e.preventDefault(),a.setState({error:null});var t=e.target;t.user_name,t.password},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{className:"LoginForm",onSubmit:this.handleSubmitJwtAuth},r.a.createElement("div",{role:"alert"},e&&r.a.createElement("p",{className:"red"},e)),r.a.createElement("div",{className:"user_name"},r.a.createElement("label",{htmlFor:"LoginForm__user_name"},"User name"),r.a.createElement("input",{required:!0,name:"user_name",id:"LoginForm__user_name"})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"LoginForm__password"},"Password"),r.a.createElement("input",{required:!0,name:"password",type:"password",id:"LoginForm__password"})),r.a.createElement("button",{type:"submit"},"Login"))}}]),t}(n.Component);T.defaultProps={onLoginSuccess:function(){}};var V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleLoginSuccess=function(){var e=a.props,t=e.location,n=e.history,r=(t.state||{}).from||"/";n.push(r),console.log(r)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"LoginPage"},r.a.createElement("h2",null,"Login"),r.a.createElement(T,{onLoginSuccess:this.handleLoginSuccess}))}}]),t}(n.Component);V.defaultProps={location:{},history:{push:function(){}}};var z=V,R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},a.handleSubmit=function(e){e.preventDefault();var t=e.target;t.user_name,t.password;a.setState({error:null})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{className:"registration-form",onSubmit:this.handleSubmit},r.a.createElement("div",{role:"alert"},e&&r.a.createElement("p",{className:"red"},e)),r.a.createElement("div",{className:"user-name"},r.a.createElement("label",{htmlFor:"registration-user-name"},"User name"),r.a.createElement("input",{name:"user_name",type:"text",required:!0,id:"registration-user-name"})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"registration-password"},"Password"),r.a.createElement("input",{name:"password",type:"password",required:!0,id:"registration-password"})),r.a.createElement("button",{type:"submit"},"Register"))}}]),t}(n.Component);R.defaultProps={onRegistrationSuccess:function(){}};var q=R,H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleRegistrationSuccess=function(e){a.props.history.push("/login")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"registration-page"},r.a.createElement("h2",null,"Register"),r.a.createElement(q,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),t}(n.Component);H.defaultProps={history:{push:function(){}}};var I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={update:!1,entry:{},tracks:[{album:"ye",artist:"Kanye West",id:"7vgTNTaEz3CsBZ1N4YQalM",img:"https://i.scdn.co/image/05cf2f8b56e595bcbf50fccb894f5fb6c2427750",name:"Ghost Town",user_id:2}],artists:[{id:"2h93pZq0e7k5yf4dywlkpM",img:"https://i.scdn.co/image/7db34c8aace6feb91f38601bb75e6b3301b4657a",name:"Frank Ocean",user_id:2},{id:"5K4W6rqBFWDnAN6FQUkS6x",img:"https://i.scdn.co/image/a12d8543e28d71d9f1e7f5f363c1a6c73316f9e6",name:"Kanye West",user_id:2}]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"logout",value:function(){this.setState({update:!1})}},{key:"rerender",value:function(){this.setState({update:!0})}},{key:"setEntry",value:function(e){this.setState({entry:e})}},{key:"renderUser",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navigation"},r.a.createElement("div",{className:"nav-start"},"FaceJams"),r.a.createElement("div",{className:"nav-mid"},r.a.createElement(h.b,{to:"/"},"Home"),r.a.createElement(h.b,{to:"/calendar"},"Calendar"),r.a.createElement(h.b,{to:"/vibes"},"Preferences")),r.a.createElement("div",{className:"nav-end"},r.a.createElement(h.b,{to:"/login",onClick:function(){return e.logout()}},"Logout"))),r.a.createElement("section",{className:"main"},r.a.createElement(d.a,{exact:!0,path:"/",component:N}),r.a.createElement(d.a,{path:"/vibes",component:L}),r.a.createElement(d.a,{path:"/calendar",component:F})))}},{key:"renderNonUser",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navigation"},r.a.createElement("div",{className:"nav-start"},"FaceJams"),r.a.createElement("div",{className:"nav-end"},r.a.createElement(h.b,{to:"/login"},"Login"),r.a.createElement(h.b,{to:"/register"},"Register"))),r.a.createElement("section",{className:"main"},r.a.createElement(d.a,{exact:!0,path:"/",component:C}),r.a.createElement(d.a,{path:"/login",component:z}),r.a.createElement(d.a,{path:"/register",render:function(t){return r.a.createElement(H,{refresh:function(){return e.rerender()}})}})))}},{key:"view",value:function(){return this.renderUser()}},{key:"render",value:function(){var e=this,t={setEntry:function(t){return e.setEntry(t)},entry:this.state.entry,artists:this.state.artists,tracks:this.state.tracks,logged:!1};return r.a.createElement(O.Provider,{value:t},r.a.createElement("div",{className:"view"},this.view()))}}]),t}(r.a.Component);c.a.render(r.a.createElement(h.a,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.2c0e3bb2.chunk.js.map