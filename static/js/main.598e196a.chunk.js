(this["webpackJsonp24bc-goit-react-hw-02-phonebook"]=this["webpackJsonp24bc-goit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={phonebook_wrapper:"Phonebook_phonebook_wrapper__6tGk_",phonebook_title:"Phonebook_phonebook_title__3pmPa"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(12),s=n.n(o),i=n(2),l=n(3),_=n(5),u=n(4),b=n(14),m=n(8),d=n(13),h=n(7),j=n.n(h),p=function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).formInitialState={name:"",number:""},t.state={name:"",number:""},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props.contacts;0===a.length?alert("'Name' is empty. Enter the name of your contact"):r.find((function(t){return t.name.toLowerCase()===a.toLowerCase()}))?alert('"'.concat(a,'" is alredy in contacts ')):t.props.addUserContact(a,c),t.setState(Object(d.a)({},t.formInitialState))},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:j.a.form__style,onSubmit:this.handleFormSubmit,children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{placeholder:"Name",className:j.a.input__style,type:"text",name:"name",value:e,onChange:this.handleChange})}),Object(a.jsx)("label",{children:Object(a.jsx)("input",{placeholder:"Number",className:j.a.input__style,type:"number",name:"number",value:n,onChange:this.handleChange})}),Object(a.jsx)("button",{className:j.a.addbtn__style,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),f=n(23),y=n(9),O=n.n(y),C=function(t){var e=t.userFilter;return Object(a.jsx)("form",{className:O.a.form__style,children:Object(a.jsxs)("label",{className:O.a.lable__style,children:["Find contacts by name",Object(a.jsx)("input",{placeholder:"Name",className:O.a.input__style,onChange:function(t){var n=t.target;e(n.value)},type:"text"})]})})},x=n(6),v=n.n(x),k=function(t){var e=t.findUserContact,n=t.deleteUserContact;return Object(a.jsx)("ul",{className:v.a.contact__list,children:e().map((function(t){return Object(a.jsxs)("li",{className:v.a.contact__item,children:[Object(a.jsx)("p",{className:v.a.contact__style,children:t.name+":"}),Object(a.jsx)("p",{className:v.a.contact__style,children:t.number}),Object(a.jsx)("button",{className:v.a.deletebtn__style,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},N=n(10),g=n.n(N),F=function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addUserContact=function(e,n){var a={name:e,number:n,id:Object(f.a)()};t.setState((function(t){return{contacts:[].concat(Object(b.a)(t.contacts),[a])}}))},t.userFilter=function(e){t.setState({filter:e})},t.findUserContact=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n)}))},t.deleteUserContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.contacts;return Object(a.jsxs)("div",{className:g.a.phonebook_wrapper,children:[Object(a.jsx)("h1",{className:g.a.phonebook_title,children:"Phonebook"}),Object(a.jsx)(p,{addUserContact:this.addUserContact,contacts:t}),Object(a.jsx)("h2",{className:g.a.phonebook_title,children:"Contacts"}),Object(a.jsx)(C,{userFilter:this.userFilter}),Object(a.jsx)(k,{findUserContact:this.findUserContact,deleteUserContact:this.deleteUserContact})]})}}]),n}(c.Component),U=function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(F,{})})}}]),n}(c.Component);n(20);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contact__list:"ContactList_contact__list__33kav",contact__style:"ContactList_contact__style__FedhI",contact__item:"ContactList_contact__item__2GjlE",deletebtn__style:"ContactList_deletebtn__style__bQHZV"}},7:function(t,e,n){t.exports={addbtn__style:"ContactForm_addbtn__style__7ZZGk",form__style:"ContactForm_form__style__1rmAx",input__style:"ContactForm_input__style__3WuGj"}},9:function(t,e,n){t.exports={form__style:"Filter_form__style__3ilhl",input__style:"Filter_input__style__255j9",lable__style:"Filter_lable__style__1UC7i"}}},[[21,1,2]]]);
//# sourceMappingURL=main.598e196a.chunk.js.map