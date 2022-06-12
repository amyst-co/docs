"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2663],{3905:function(e,i,t){t.d(i,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function A(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?A(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,r,n=function(e,i){if(null==e)return{};var t,r,n={},A=Object.keys(e);for(r=0;r<A.length;r++)t=A[r],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)t=A[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),a=function(e){var i=r.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},l=function(e){var i=a(e.components);return r.createElement(s.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},d=r.forwardRef((function(e,i){var t=e.components,n=e.mdxType,A=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=a(t),g=n,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||A;return t?r.createElement(m,o(o({ref:i},l),{},{components:t})):r.createElement(m,o({ref:i},l))}));function g(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var A=t.length,o=new Array(A);o[0]=d;var c={};for(var s in i)hasOwnProperty.call(i,s)&&(c[s]=i[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var a=2;a<A;a++)o[a]=t[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1654:function(e,i,t){t.r(i),t.d(i,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u}});var r=t(7462),n=t(3366),A=(t(7294),t(3905)),o=["components"],c={sidebar_position:1},s="Microservices",a={unversionedId:"Editor/Microservices/microservices",id:"Editor/Microservices/microservices",title:"Microservices",description:'Microservices are a defined as a group of functionalities which are capable of performing "similar" actions.',source:"@site/docs/Editor/Microservices/microservices.md",sourceDirName:"Editor/Microservices",slug:"/Editor/Microservices/",permalink:"/docs/docs/Editor/Microservices/",editUrl:"https://github.com/amyst-co/docs/blob/master/docs/Editor/Microservices/microservices.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/docs/docs/Editor/Components/Monitoring"},next:{title:"Infrastructure Management",permalink:"/docs/docs/Infrastructure Management/"}},l={},u=[{value:"Creating microservice",id:"creating-microservice",level:2},{value:"Deleting microservice",id:"deleting-microservice",level:2}],d={toc:u};function g(e){var i=e.components,c=(0,n.Z)(e,o);return(0,A.kt)("wrapper",(0,r.Z)({},d,c,{components:i,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"microservices"},"Microservices"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"Microservices"),' are a defined as a group of functionalities which are capable of performing "similar" actions.\nIn the world of Amyst, Microservices are a group of components connected to each other and capable of exposing a method to end user for further usage.'),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Select Microservice",src:t(4633).Z,width:"277",height:"198"})," "),(0,A.kt)("p",null,'To begin using a microservice, the user can select a microservice from the dropdown on top of Editor page, or select the "New Service" button to create a new service. All service-based configurations stay isolated for every microservice. Therefore, if a person is working on two microservices in parallel, the two services can be developed simultaneously without having any issues.'),(0,A.kt)("p",null,"All the builds in Amyst are also created per microservice, and therefore these are technically isolated from each other in all senses."),(0,A.kt)("h2",{id:"creating-microservice"},"Creating microservice"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"New Microservice",src:t(6214).Z,width:"560",height:"186"})," "),(0,A.kt)("p",null,"To create a new microservice, click on \"New Service\" button in microservices section. A microservice can be identified using it's common name which must be unique amongst all microservices i.e. no two microservices in a user's space can have the same name."),(0,A.kt)("h2",{id:"deleting-microservice"},"Deleting microservice"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Delete button",src:t(9610).Z,width:"303",height:"87"})," "),(0,A.kt)("p",null,"Deleting a microservice is a destructive process i.e. all the saved data is deleted as we delete a microservice and this cannot be undone. Therefore, a user must be very careful about deleting a microservice."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Delete button",src:t(3193).Z,width:"323",height:"121"})," "),(0,A.kt)("p",null,'To delete a microservice, click on the "X" button next to the microservice and confirm on the pop-up. All the information related to a microservice\'s builds, component configuration, etc. gets deleted when we delete the microservice.'))}g.isMDXComponent=!0},3193:function(e,i,t){i.Z=t.p+"assets/images/delete-0a6407291b2288134aa13cce9b430377.png"},9610:function(e,i){i.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAABXCAYAAABV2MPAAAAK4WlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU1kagO976SEhQALSCb0J0gkgJYQWunQQlZAEEkqICUHBjgyO4KggIk0dwVERBUdHQMaCWLCi2LAPyCCgrIMFGyr7gCXMzJ7dPfu/c3O/87///uWde3P+CwA5mCMWZ8BKAGSKsiUR/t70uPgEOu45QAMi8tgCaw5XKmaGhwcDRGbmv8r7ewCanG9bTfr69/f/VVR4fCkXACgR4WSelJuJcDsyRrliSTYAqCOI3nBZtniS7yBMkyAJIjw0yanT/GWSk6cYrTRlExXBQtgIADyJw5GkAkCyQfT0HG4q4ocUjrCNiCcUIbwWYQ+ugMNDGIkL5mZmZk3yCMJmiL0YADINYUbyn3ym/sV/stw/h5Mq5+m6pgTvI5SKMzi5/+en+d+SmSGbiWGCDJJAEhCBzOrI97ufnhUkZ1FyaNgMC3lT9lMskAVEzzBXykqYYR7HJ0i+NiM0eIZThH5suZ9sdtQM86W+kTMsyYqQx0qRsJgzzJHMxpWlR8v1Aj5b7j9PEBU7wznCmNAZlqZHBs3asOR6iSxCnj9f5O89G9dPXnum9E/1CtnytdmCqAB57ZzZ/Pki5qxPaZw8Nx7fx3fWJlpuL872lscSZ4TL7fkZ/nK9NCdSvjYb2Zyza8Pl3zCNExg+w8AH+IJg5KGDaGAHnJFz6ILoWNn85dmTxbCyxLkSYaogm85EThyfzhZxrefS7Wzs7ACYPL/TW+JtxNS5hNROz+qy9iJb+T1yZkpmdcllALQUIqEfzuqMdgFAKQCguYMrk+RM69CTPxjkX4ECaEAD6AJDYAaskPycgBvwQjIOBGEgCsSDxYALBCATSMAysBKsA4WgGGwF20EV2A3qwAFwGBwFLeAkOAsugqvgJrgLHoFeMABeglHwHoxDEISDyBAV0oD0IGPIErKDGJAH5AsFQxFQPJQEpUIiSAathNZDxVApVAXtgeqhn6ET0FnoMtQNPYD6oGHoDfQZRsEkmAbrwCbwPJgBM+EgOApeBKfCS+E8uADeDFfAtfAhuBk+C1+F78K98Et4DAVQCig1lD7KCsVAsVBhqARUCkqCWo0qQpWjalGNqDZUJ+o2qhc1gvqExqKpaDraCu2GDkBHo7nopejV6E3oKvQBdDP6PPo2ug89iv6GIWO0MZYYVwwbE4dJxSzDFGLKMfswxzEXMHcxA5j3WCxWDWuKdcYGYOOxadgV2E3YndgmbDu2G9uPHcPhcBo4S5w7LgzHwWXjCnGVuEO4M7hbuAHcR7wCXg9vh/fDJ+BF+Hx8Of4g/jT+Fn4QP05QIhgTXAlhBB4hl7CFsJfQRrhBGCCME5WJpkR3YhQxjbiOWEFsJF4gPia+VVBQMFBwUVigIFRYq1ChcEThkkKfwieSCsmCxCIlkmSkzaT9pHbSA9JbMplsQvYiJ5CzyZvJ9eRz5Kfkj4pURWtFtiJPcY1itWKz4i3FVxQCxZjCpCym5FHKKccoNygjSgQlEyWWEkdptVK10gmlHqUxZaqyrXKYcqbyJuWDypeVh1RwKiYqvio8lQKVOpVzKv1UFNWQyqJyqeupe6kXqAM0LM2Uxqal0Ypph2ldtFFVFVUH1RjV5arVqqdUe9VQaiZqbLUMtS1qR9XuqX2eozOHOYc/Z+Ocxjm35nxQ11L3UuerF6k3qd9V/6xB1/DVSNco0WjReKKJ1rTQXKC5THOX5gXNES2alpsWV6tI66jWQ21Y20I7QnuFdp32Ne0xHV0dfx2xTqXOOZ0RXTVdL9003TLd07rDelQ9Dz2hXpneGb0XdFU6k55Br6Cfp4/qa+sH6Mv09+h36Y8bmBpEG+QbNBk8MSQaMgxTDMsMOwxHjfSMQoxWGjUYPTQmGDOMBcY7jDuNP5iYmsSabDBpMRkyVTdlm+aZNpg+NiObeZotNas1u2OONWeYp5vvNL9pAVs4Wggsqi1uWMKWTpZCy52W3XMxc13miubWzu2xIlkxrXKsGqz6rNWsg63zrVusX80zmpcwr2Re57xvNo42GTZ7bR7ZqtgG2ubbttm+sbOw49pV292xJ9v72a+xb7V/7WDpwHfY5XDfkeoY4rjBscPxq5Ozk8Sp0WnY2cg5ybnGuYdBY4QzNjEuuWBcvF3WuJx0+eTq5JrtetT1Dzcrt3S3g25D803n8+fvnd/vbuDOcd/j3utB90jy+NGj11Pfk+NZ6/nMy9CL57XPa5BpzkxjHmK+8rbxlngf9/7AcmWtYrX7oHz8fYp8unxVfKN9q3yf+hn4pfo1+I36O/qv8G8PwAQEBZQE9LB12Fx2PXs00DlwVeD5IFJQZFBV0LNgi2BJcFsIHBIYsi3kcahxqCi0JQyEscO2hT0JNw1fGv7rAuyC8AXVC55H2EasjOiMpEYuiTwY+T7KO2pL1KNos2hZdEcMJSYxpj7mQ6xPbGlsb9y8uFVxV+M144XxrQm4hJiEfQljC30Xbl84kOiYWJh4b5HpouWLLi/WXJyx+NQSyhLOkmNJmKTYpINJXzhhnFrOWDI7uSZ5lMvi7uC+5HnxynjDfHd+KX8wxT2lNGUo1T11W+qwwFNQLhgRsoRVwtdpAWm70z6kh6XvT5/IiM1oysRnJmWeEKmI0kXns3Szlmd1iy3FheLepa5Lty8dlQRJ9kkh6SJpazYNaZSuycxk38n6cjxyqnM+LotZdmy58nLR8mu5Frkbcwfz/PJ+WoFewV3RsVJ/5bqVfauYq/ashlYnr+5YY7imYM3AWv+1B9YR16Wvu55vk1+a/2597Pq2Ap2CtQX93/l/11CoWCgp7NngtmH39+jvhd93bbTfWLnxWxGv6EqxTXF58ZdN3E1XfrD9oeKHic0pm7u2OG3ZtRW7VbT1XolnyYFS5dK80v5tIduay+hlRWXvti/ZfrncoXz3DuIO2Y7eiuCK1kqjyq2VX6oEVXervaubarRrNtZ82MnbeWuX167G3Tq7i3d//lH44/09/nuaa01qy+uwdTl1z/fG7O38ifFT/T7NfcX7vu4X7e89EHHgfL1zff1B7YNbGuAGWcPwocRDNw/7HG5ttGrc06TWVHwEHJEdefFz0s/3jgYd7TjGONb4i/EvNcepx4uaoebc5tEWQUtva3xr94nAEx1tbm3Hf7X+df9J/ZPVp1RPbTlNPF1weuJM3pmxdnH7yNnUs/0dSzoenYs7d+f8gvNdF4IuXLrod/FcJ7PzzCX3Sycvu14+cYVxpeWq09Xma47Xjl93vH68y6mr+YbzjdabLjfbuud3n77leevsbZ/bF++w71y9G3q3+170vfs9iT2993n3hx5kPHj9MOfh+KO1jzGPi54oPSl/qv209jfz35p6nXpP9fn0XXsW+exRP7f/5e/S378MFDwnPy8f1BusH7IbOjnsN3zzxcIXAy/FL8dHCv+h/I+aV2avfvnD649ro3GjA68lryfebHqr8Xb/O4d3HWPhY0/fZ74f/1D0UePjgU+MT52fYz8Pji/7gvtS8dX8a9u3oG+PJzInJsQcCWeqFUAhA05JAeDNfqQ/jgeAehMA4sLp/npKoOk7wRSB/8TTPfiUOAFQ1wNA1AoAgq8DUFmFtLSIfwpyLwinIHo3ANvby8e/RJpibzfti+SJtCZPJibemgGAKwHga8nExHjdxMTXOiTZRwC050739ZOidAi5ydR4x8fEPtgWugj8TaZ7/j/V+PcZTGbgAP4+/xNwsh0Ysr1psAAAAFZlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA5KGAAcAAAASAAAARKACAAQAAAABAAABL6ADAAQAAAABAAAAVwAAAABBU0NJSQAAAFNjcmVlbnNob3TICAWJAAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj44NzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMDM8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K8DOZUwAADOZJREFUeAHtnQlwVdUZx7+Xl/VlT0hCFiBsRQhLAaEFyiZC0bBItR0REAGLTgErDMKUWmmrLbbSMqOObZFxKEsHRmKxQKVgCxkFLKUiYA2LKFsIS8i+Jy/p953kZn0PXsK9N3mX/zeT9+4979xzvvM7uf/5zrlv3mcbNnxkDcFAAARAwMsI+HiZv3AXBEAABBQBiBf+EUAABLySAMTLK6cNToMACEC88D8AAiDglQQgXl45bXAaBEDANyWlHyiAAAiAgNcRsMWvOImvSnjdtMFhEAABQ5eNc78dTb+cGt+C8vg+obRhTjfys9vUZ398oiuFBBjqSgsfPC3oyL55OgbUAwErEjBUMQYkBtL8UZ3ovs6BTdgtHhdDk1PCyKdWu+jtQ9lUXFHdpE5HOenIvnUURvADBNqDgKHiJQM6fL6IZg+Pqh9bz5gAigiy063iqvqyp0dFk39dFDaL6/5lQTK9lBpPSZF+qs6LD3emGd+MoD8/lazO40J9ac2MBEp7pgc990As+dapYFyYH62eEq+unzciur79WK7/6oxEFe2N/UaIKu8XH0irHupMyx6MpZnDI+mtmV0o0K8Wx7BkB/1obIyq19i3kT2C6e3ZXemNx7vQ/d0c9e2Lb1vnJ9PzE2IpOti3vhwHIAACxhEwXLz2nCqgh/qH1QvD7G9F0ZZ/51BAnVjJ0Mb2DlUCNH1QBD06JIJW7bxKJzNL6VfTE9XIh3Z10JjeIbRm7zV1vmleMp27UU5L371CQ7sG0fcGR6jylZPi6OKtClqy7YrqcwSLjdhGFr3/XiqhX+zOolWTO1O3KH+KcvjSk+zLZ5dLae/nBeTknb/xfWqF7QdDI+lqfqW6VvMtOdqf1j6WROs/zqa3Dt6kdd9PUmN68L5Qmjsiilb+NZNyWJBFPGEgAALGEzBcvCqc1fTP04U0bWA4+fvaaMqAcNpxPJcC6qKcxkOcnBJKW1nYLrAA7fwsj948eKP+402f5NDpa2UkIhLLEdY7h27RpZwKev3ATZrKbYvllFTRxL6hNDApiGa9c4GOfFVMXSL9lVhJcDayZ7C6ZgLXETvGgvavM4WUW+KkHZ/m0lT2zc4Vv9MrhP7xvwJVR3sZzWXS3n8ulFAG+7FwyyUVLU7hvs/frKBRPUOoghVwdK9gsnFfMBAAAWMJGC5esqTbzIIkEVdq/3BKP1tIhWXV9ftdjYdn47s+h4VEMxGK5ubDdW4W1kZF8llBqZN6dPJX1V75+zX6Q3q22k87uKy32mtz+PtQRVU1BfMDAfk78nUxZWSVNW+WPv6yWImeRHhHuU5pZdM9OOlXIivNRMAKypwk7YtJ23L8BkdlIoAwEAABYwm0aoOmuiSXnEU3qKaylL1q+Q0L/8TBLr09xUtAO9/jL/Cy7tmtl1zWkcIPePk2qV8oHeBoKCbEVy3T5m680KT+V9nlLHw2FqwAkmOJuo7WidyfZnUlEbCV72XSK9MSVKQlEZpEVulnizhCKqdevOdWyKLTO7bpQwRndQ3tzyikl6fFq2Vrk075ZO8XBbR5Xjd6bb+NxbBG7X39nJehu07ms89htPHwLUVkRPdgqpI1qAuryDzuohRFINBeBGxk8wsie0gs+Tgi28uJNvfrsXgp4SrIIntkF/IJqF12taZXib6e4k102ctyZ/szCtRG+K5FPdWmvgiRK5O9r7RnunMk5KRcjrwWbLqoqu05lU/bf9idsni/SsTot/uuq/KX/palNvjloUAN68ribZddNauWjo/w5vuh88UtPr9eUEnbj+WqhwQOXvLuY18z8yopu6iA990ctHtxL5J4azf7cJiXl67Mnbi7qosyEDCDQHV5ITlza+8HbxMwj7+kWnnjDNnDE9okXK2dBNkbq+ToRYTGnXHwRUEsIiUuvmIhyzdX5fI0sazZctBd++7KZUUoy0Lxr7HJd9ZYL5VoNi7HMQh0dAJKwPKvkl9sn47uahP/PI68ZKnYloirSW8ensiy7E4mwuZKoOQ6d+V3K1zStghUdTPhkvLmYiZlMBDwBgJyX1eprSBv8LbBx1Zs2N9ZUBqaxREIgIB3EfC++7sV4uVdUwFvQQAErE0A4mXt+cXoQMCyBCBelp1aDAwErE0A4mXt+cXoQMCyBCBelp1aDAwErE0A4mXt+cXoQMCyBCBelp1aDAwErE0A4mXt+cXoQMCyBCBelp1aDAwErE0A4mXt+cXoQMCyBCBelp1aDAwErE0A4mXt+cXoQMCyBCBelp1aDAwErE3AkuIVxtmJJJMQDARAwLoELCNe8gOBksxWksSeeLEvjatLcWbdqcPIQMB4ApMyP/KoE0/redSYh5UsI14/mRxHv38ska7kVeDXTD2cfFQDgdsREEFa/vl69Xe7ei+cqq1jtoAZLl7yk8zyu/CS1HX5xDjqy8lexSQR7NpHE0kSyGom+RSlLCzQrooSIvxoyfgYWs+JXiX7UDgvB93ZBk60MfTXp1UCDvyqqTtKKAcBzwnsSxxN+xNGkyZirq4U4Zp49SNVT+qbaYaL10852/Uizj79CacTiw6x04c/7k2StfpGYRVn9wmh1LqcizLo6Sxyg5IcKqWYZJ7esbAHpXIuRbn2YU5c+8GSXi5Tpsm11zjphvxEMwwEQEA/Aq8NWOhWwBoLl9Qz2xrCHgN6ln2omfdH0vK0THrveJ7qIZcz/nRiYRKTMkn0KunJxFJZoNI4Ia3Ys2M6KaGa/PqX6nwzJ509sqIPi1i4ytCjCvECAvcgAWfelTuO2h6RdMc6nlbQhElbFq7tv5DaW7jEd0PFS9KP7eFcjKunxFNKQhDt5hyHWjoy6TyNxev5CbFq6ejv60P9eEn55MZ8+YgGdQniRLBF6lheZCk47NXT6nzBqGgWtxh1LDkYH1h3Th3jBQTuCQKcOqvk1E6qqSpvMVybbwA5BjzSovxuCxoL2KCcDIorzVYRmVZ+t+235XpDxUscem77ZZrATwFl+bft6e6c67CC5nOexQu3KuhrThp7/HKJiqYk3dkRznco+RHFohy+nLm6acZsLRXa+ycaciNWN01sra7FCwhYmYA9PFEJVHMB04RLPjfCRKgG5tYK1/WgTtSewiXjM3TPSzblJaN1+rkiWvruFRr48hdqX2rRuNqoSRxI+zSPpnAdWQ5KJKaZCNvInsHaqXr/Lmem7s8RXHZRFWVklam/M9fLmtTBCQjcCwQ0ARPBEjNauKQPWSpKxCXCJe/yJLI9zVDxquKo6M3Hu5CIlSSIjeBoKsjPxolfG3bW3z+RR0M443RKQiBJxmvNthzNUZmoZw2PUtdO7BtGG+Z0pUC+HgYCIMDJj+siMLOES3uqOGfMOreb+GbOi6HLxpziKpq78SL9ZkYiLeW9LdmfOnC2iH734fX6MeaWOCn9bKEStKLyhjVgOtdbvSuLfpbamdbMSCCpt2xHJh272HQpWd8QDkDgHiQgAhY85AnycUQaNnpXm/PakrHxJr5hDrhp2Ba/4mRDGOSmkhRXZB4n/8TBt6lx+48iHHYqKHW2+usMvDdJ8rUJWSrCQAAEjCHg7v52JVyNPdA+l+94yVNIM83QyKvxQPI4cmqLySY9hKst5HANCNwdAYmqtKWiFmk1b1Erl7onI/uSmV9UNU28mg8a5yAAAh2bgCZE2rs7b0XATkSZK1zii6Eb9u4Gi3IQAAHvIHAn4dJG4Wk9rb4e7xAvPSiiDRAAAdMJQLxMR44OQQAE9CAA8dKDItoAARAwnQDEy3Tk6BAEQEAPAhAvPSiiDRAAAdMJQLxMR44OQQAE9CAA8dKDItoAARAwnQDEy3Tk6BAEQEAPAhAvPSiiDRAAAdMJQLxMR44OQQAE9CAA8dKDItoAARAwnQDEy3Tk6BAEQEAPAhAvPSiiDRAAAdMJQLxMR44OQQAE9CDQCvHCb8frARxtgEDHJOB997fH4mXzC6Lq8sKOyR1egQAItJmA3Ndyf3ubeSxe9pBYcuZehoB52wzDXxC4DQERLrmv5f72NvP4Z6C17CTO/KtUVVnK4/Qob4e38YC/IHAPEbCpiMseFm9o9iGjgHosXuKACJgmYkY5hHZBAARAwBMCHi8bPWkMdUAABEDALAIQL7NIox8QAAFdCUC8dMWJxkAABMwiAPEyizT6AQEQ0JUAxEtXnGgMBEDALAIQL7NIox8QAAFdCdhq2HRtEY2BAAiAgAkEEHmZABldgAAI6E8A4qU/U7QIAiBgAgGIlwmQ0QUIgID+BCBe+jNFiyAAAiYQgHiZABldgAAI6E8A4qU/U7QIAiBgAgGIlwmQ0QUIgID+BCBe+jNFiyAAAiYQgHiZABldgAAI6E8A4qU/U7QIAiBgAgGIlwmQ0QUIgID+BCBe+jNFiyAAAiYQgHiZABldgAAI6E8A4qU/U7QIAiBgAoH/AwH4joOqibsyAAAAAElFTkSuQmCC"},4633:function(e,i,t){i.Z=t.p+"assets/images/microservices-ede29b8d4e6b660a3f9f5a0882d78d7a.png"},6214:function(e,i,t){i.Z=t.p+"assets/images/new-e0e22b4afa863b5fb8a60292d3b0e268.png"}}]);