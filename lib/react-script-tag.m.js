Object.defineProperty(exports,"__esModule",{value:!0});const t=require("tslib").__importDefault(require("react"));class o extends t.default.Component{constructor(t){super(t),this.state={delayMs:t.delayMs||0,src:t.src,timeout:null,render:t.render||null,id:t.id||null,renderScript:t.renderScript||!1,updated:!1},this.componentDidMount=this.componentDidMount.bind(this),this.componentWillUnmount=this.componentWillUnmount.bind(this),this._appendScript=this._appendScript.bind(this),this.render=this.render.bind(this),this.onCreate=this.onCreate.bind(this),this.onLoad=this.onLoad.bind(this),this.onError=this.onError.bind(this),this.onSuccess=this.onSuccess.bind(this)}componentDidMount(){this.log("componentDidMount started","color: #ff0000; font-weight: bold;",2),this.setState({timeout:setTimeout(this._appendScript,this.state.delayMs)}),this.log("componentDidMount exiting","color: #ff0000; font-weight: bold;",2)}log(t,o,e){if(this.props.debug){const s=e?" ".repeat(e):"";console.log(`%c ScriptLoader debug {src: "${this.state.src}"}`,o||"color: #00ff00; font-weight: bold;"),console.log(`%c ${s} ${t}`,o||"color: #00ff00; font-weight: bold;")}}componentDidUpdate(){this.log("componentDidUpdate started","color: #ff0000; font-weight: bold;",2),0==this.state.updated&&(this.setState({updated:!0}),this.onSuccess()),this.log("componentDidUpdate exiting","color: #ff0000; font-weight: bold;",2)}componentWillUnmount(){this.log("componentWillUnmount started","color: #ff0000; font-weight: bold;",2),this.state.timeout&&(this.log("Clearing Timeout...","color: #ff0000; font-weight: medium;",4),clearTimeout(this.state.timeout)),this.log("componentWillUnmount exiting","color: #ff0000; font-weight: bold;",2)}_appendScript=()=>{this.log("_appendScript started","color: #ff0000; font-weight: bold;",2);const{delayMs:t,src:o,id:e}=this.state,s=document.createElement("script");s.src=o,this.state.id&&(s.id=this.state.id);const i=Object.keys(this.state),n=Object.keys(this.props).filter((t=>!i.includes(t)));if(s.setAttribute("data-delayMs",t.toString()),0<n.length)for(const[t,o]of Object.entries(this.props))i.includes(t)||s.setAttribute(t,o);s.onload=this.onLoad,s.onerror=this.onError,document.body.appendChild(s),this.onCreate(),this.log("_appendScript exiting","color: #ff0000; font-weight: bold;",2)};onError(t){const{onError:o}=this.props;this.log(`onerror started... for { src: "${this.state.src}" }`,"color: #ff0000; font-weight: bold;",2),o&&o(t),this.log(`onerror exiting... for { src: "${this.state.src}" }`,"color: #ff0000; font-weight: bold;",2)}onSuccess(){const{onSuccess:t}=this.props;this.log(`onsuccess started... for { src: "${this.state.src}" }`,"color: #ff0000; font-weight: bold;",2),t&&t(),this.log(`onsuccess exiting... for { src: "${this.state.src}" }`,"color: #ff0000; font-weight: bold;",2)}onLoad(t){const o=this.props.onLoad;this.log(`onload started... for { src: "${this.state.src}" }`,"color: #ff0000; font-weight: bold;",2),t&&this.log(`onload event: ${JSON.stringify(t,null,2)}`,"color: #ff0000; font-weight: bold;",4),o&&o(t),this.log(`onload exiting... for { src: "${this.state.src}" }`,"color: #ff0000; font-weight: bold;",2)}onCreate(t){const{onLoad:o}=this.props;this.log(`oncreate started... for { src: "${this.state.src}" }`,"color: #ff0000; font-weight: bold;",2),t&&this.log(`oncreate event: ${JSON.stringify(t,null,2)}`,"color: #ff0000; font-weight: bold;",4),o&&o(t),this.log(`oncreate exiting... for { src: "${this.state.src}" }`,"color: #ff0000; font-weight: bold;",2)}render(){const{updated:t,render:o}=this.state;return this.log(`render called, { src: ${this.state.src}}`,"color: #ff0000; font-weight: bold;",2),t&&o?o:null}}exports.default=o;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtc2NyaXB0LXRhZy5tLmpzIiwic291cmNlcyI6WyIuLi9zcmMvc3JjL1NjcmlwdFRhZy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiogQGNsYXNzIFNjcmlwdExvYWRlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgYSByZWFjdCBjb21wb25lbnQgaXMgaW50ZW5kZWQgdG8gYmUgYSBkcm9wLWluIHJlcGxhY2VtZW50IGZvciB0aGUgPHNjcmlwdD4gaHRtbCBuYXRpdmUgdGFnLiBBZnRlciB5b3UgYWRkIGl0IGluIGFueSBsb2NhdGlvbiBvZiB5b3VyIHJlYWN0LWFwcCwgdGhlIGNvbXBvbmVudCB3aWxsIHRha2UgY2FyZSBvbiBhcHBlbmRpbmcsIHRoZSBjb3JyZXNwb25kaW5nIHNjcmlwdCB0YWcgdG8geW91ciBhcHAncyBkb2N1bWVudC4gSXQgc3VwcG9ydHMgYWxsIHRoZSBuYXRpdmUgYXR0cmlidXRlcyBhcyB3ZWxsLlxuICogQGV4YW1wbGUgYGBgPFNjcmlwdExvYWRlciBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanNcIiAvPmBgYFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHRUYWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gICAgU2NyaXB0TG9hZGVyUHJvcHMsXG4gICAge1xuICAgICAgICBkZWxheU1zOiBudW1iZXI7XG4gICAgICAgIHNyYzogc3RyaW5nO1xuICAgICAgICB0aW1lb3V0OiBOb2RlSlMuVGltZW91dCB8IG51bGw7XG4gICAgICAgIHJlbmRlcjogSlNYLkVsZW1lbnQgfCBudWxsO1xuICAgICAgICBpZDogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgcmVuZGVyU2NyaXB0OiBib29sZWFuO1xuICAgICAgICB1cGRhdGVkOiBib29sZWFuO1xuICAgIH1cbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBTY3JpcHRMb2FkZXJQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlbGF5TXM6IHByb3BzLmRlbGF5TXMgfHwgMCxcbiAgICAgICAgICAgIHNyYzogcHJvcHMuc3JjLFxuICAgICAgICAgICAgdGltZW91dDogbnVsbCxcbiAgICAgICAgICAgIHJlbmRlcjogcHJvcHMucmVuZGVyIHx8IG51bGwsXG4gICAgICAgICAgICBpZDogcHJvcHMuaWQgfHwgbnVsbCxcbiAgICAgICAgICAgIHJlbmRlclNjcmlwdDogcHJvcHMucmVuZGVyU2NyaXB0IHx8IGZhbHNlLFxuICAgICAgICAgICAgdXBkYXRlZDogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYXBwZW5kU2NyaXB0ID0gdGhpcy5fYXBwZW5kU2NyaXB0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ3JlYXRlID0gdGhpcy5vbkNyZWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTG9hZCA9IHRoaXMub25Mb2FkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25FcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU3VjY2VzcyA9IHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9nKFxuICAgICAgICAgICAgXCJjb21wb25lbnREaWRNb3VudCBzdGFydGVkXCIsXG4gICAgICAgICAgICBcImNvbG9yOiAjZmYwMDAwOyBmb250LXdlaWdodDogYm9sZDtcIixcbiAgICAgICAgICAgIDJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQodGhpcy5fYXBwZW5kU2NyaXB0LCB0aGlzLnN0YXRlLmRlbGF5TXMpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgIFwiY29tcG9uZW50RGlkTW91bnQgZXhpdGluZ1wiLFxuICAgICAgICAgICAgXCJjb2xvcjogI2ZmMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbG9nKG1zZzogc3RyaW5nLCBzdHlsZT86IHN0cmluZywgaW5kZW50PzogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRlbnRTdHIgPSBpbmRlbnQgPyBcIiBcIi5yZXBlYXQoaW5kZW50KSA6IFwiXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgJWMgU2NyaXB0TG9hZGVyIGRlYnVnIHtzcmM6IFwiJHt0aGlzLnN0YXRlLnNyY31cIn1gLFxuICAgICAgICAgICAgICAgIHN0eWxlIHx8IGBjb2xvcjogIzAwZmYwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7YFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYCVjICR7aW5kZW50U3RyfSAke21zZ31gLFxuICAgICAgICAgICAgICAgIHN0eWxlIHx8IGBjb2xvcjogIzAwZmYwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICBcImNvbXBvbmVudERpZFVwZGF0ZSBzdGFydGVkXCIsXG4gICAgICAgICAgICBcImNvbG9yOiAjZmYwMDAwOyBmb250LXdlaWdodDogYm9sZDtcIixcbiAgICAgICAgICAgIDJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXBkYXRlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdXBkYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgIFwiY29tcG9uZW50RGlkVXBkYXRlIGV4aXRpbmdcIixcbiAgICAgICAgICAgIFwiY29sb3I6ICNmZjAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgMlxuICAgICAgICApO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICBcImNvbXBvbmVudFdpbGxVbm1vdW50IHN0YXJ0ZWRcIixcbiAgICAgICAgICAgIFwiY29sb3I6ICNmZjAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgMlxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aW1lb3V0KSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgICAgICBcIkNsZWFyaW5nIFRpbWVvdXQuLi5cIixcbiAgICAgICAgICAgICAgICBcImNvbG9yOiAjZmYwMDAwOyBmb250LXdlaWdodDogbWVkaXVtO1wiLFxuICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgIFwiY29tcG9uZW50V2lsbFVubW91bnQgZXhpdGluZ1wiLFxuICAgICAgICAgICAgXCJjb2xvcjogI2ZmMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2FwcGVuZFNjcmlwdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICBcIl9hcHBlbmRTY3JpcHQgc3RhcnRlZFwiLFxuICAgICAgICAgICAgXCJjb2xvcjogI2ZmMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgeyBkZWxheU1zLCBzcmMsIGlkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgIFxuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaWQpIHtcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IHRoaXMuc3RhdGUuaWQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHNjcmlwdFByb3BLZXlzID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZSk7XG4gICAgICAgIGNvbnN0IG90aGVyUHJvcHNLZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcykuZmlsdGVyKFxuICAgICAgICAgICAgKHByb3ApID0+ICFzY3JpcHRQcm9wS2V5cy5pbmNsdWRlcyhwcm9wKVxuICAgICAgICApO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxheU1zXCIsIGRlbGF5TXMudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLy8gQWRkIGN1c3RvbSBhdHRyaWJ1dGVzXG4gICAgICAgIGlmIChvdGhlclByb3BzS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFthdHRyLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NyaXB0UHJvcEtleXMuaW5jbHVkZXMoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUgYXMgYW55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSB0aGlzLm9uTG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSB0aGlzLm9uRXJyb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XG5cbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICBcIl9hcHBlbmRTY3JpcHQgZXhpdGluZ1wiLFxuICAgICAgICAgICAgXCJjb2xvcjogI2ZmMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAyXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIG9uRXJyb3IoZT86IEVycm9yIHwgRXZlbnQgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgeyBvbkVycm9yIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgIGBvbmVycm9yIHN0YXJ0ZWQuLi4gZm9yIHsgc3JjOiBcIiR7dGhpcy5zdGF0ZS5zcmN9XCIgfWAsXG4gICAgICAgICAgICBcImNvbG9yOiAjZmYwMDAwOyBmb250LXdlaWdodDogYm9sZDtcIixcbiAgICAgICAgICAgIDJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgIG9uRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICBgb25lcnJvciBleGl0aW5nLi4uIGZvciB7IHNyYzogXCIke3RoaXMuc3RhdGUuc3JjfVwiIH1gLFxuICAgICAgICAgICAgXCJjb2xvcjogI2ZmMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25TdWNjZXNzKGU/OiBFcnJvciB8IEV2ZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHsgb25TdWNjZXNzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgIGBvbnN1Y2Nlc3Mgc3RhcnRlZC4uLiBmb3IgeyBzcmM6IFwiJHt0aGlzLnN0YXRlLnNyY31cIiB9YCxcbiAgICAgICAgICAgIFwiY29sb3I6ICNmZjAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgMlxuICAgICAgICApO1xuICAgICAgICBpZiAob25TdWNjZXNzKSB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgIGBvbnN1Y2Nlc3MgZXhpdGluZy4uLiBmb3IgeyBzcmM6IFwiJHt0aGlzLnN0YXRlLnNyY31cIiB9YCxcbiAgICAgICAgICAgIFwiY29sb3I6ICNmZjAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgMlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uTG9hZChlPzogRXZlbnQgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY3VzdG9tT25Mb2FkID0gdGhpcy5wcm9wcy5vbkxvYWQgYXMgKGU/OiBFdmVudCkgPT4gdm9pZDtcbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICBgb25sb2FkIHN0YXJ0ZWQuLi4gZm9yIHsgc3JjOiBcIiR7dGhpcy5zdGF0ZS5zcmN9XCIgfWAsXG4gICAgICAgICAgICBcImNvbG9yOiAjZmYwMDAwOyBmb250LXdlaWdodDogYm9sZDtcIixcbiAgICAgICAgICAgIDJcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICAgICAgYG9ubG9hZCBldmVudDogJHtKU09OLnN0cmluZ2lmeShlLCBudWxsLCAyKX1gLFxuICAgICAgICAgICAgICAgIFwiY29sb3I6ICNmZjAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1c3RvbU9uTG9hZCkge1xuICAgICAgICAgICAgY3VzdG9tT25Mb2FkKGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nKFxuICAgICAgICAgICAgYG9ubG9hZCBleGl0aW5nLi4uIGZvciB7IHNyYzogXCIke3RoaXMuc3RhdGUuc3JjfVwiIH1gLFxuICAgICAgICAgICAgXCJjb2xvcjogI2ZmMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25DcmVhdGUoZT86IEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgb25Mb2FkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLmxvZyhcbiAgICAgICAgICAgIGBvbmNyZWF0ZSBzdGFydGVkLi4uIGZvciB7IHNyYzogXCIke3RoaXMuc3RhdGUuc3JjfVwiIH1gLFxuICAgICAgICAgICAgXCJjb2xvcjogI2ZmMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAyXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nKFxuICAgICAgICAgICAgICAgIGBvbmNyZWF0ZSBldmVudDogJHtKU09OLnN0cmluZ2lmeShlLCBudWxsLCAyKX1gLFxuICAgICAgICAgICAgICAgIFwiY29sb3I6ICNmZjAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob25Mb2FkKSB7XG4gICAgICAgICAgICBvbkxvYWQoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2coXG4gICAgICAgICAgICBgb25jcmVhdGUgZXhpdGluZy4uLiBmb3IgeyBzcmM6IFwiJHt0aGlzLnN0YXRlLnNyY31cIiB9YCxcbiAgICAgICAgICAgIFwiY29sb3I6ICNmZjAwMDA7IGZvbnQtd2VpZ2h0OiBib2xkO1wiLFxuICAgICAgICAgICAgMlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVkLCByZW5kZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMubG9nKFxuICAgICAgICAgICAgYHJlbmRlciBjYWxsZWQsIHsgc3JjOiAke3RoaXMuc3RhdGUuc3JjfX1gLFxuICAgICAgICAgICAgXCJjb2xvcjogI2ZmMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCIsXG4gICAgICAgICAgICAyXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHVwZGF0ZWQgJiYgcmVuZGVyID8gcmVuZGVyIDogbnVsbDtcbiAgICB9XG59XG5cbi8qKiBAdHlwZSBTY3JpcHRMb2FkZXJQcm9wcyBUaGlzIGlzIHRoZSB0eXBlIGRlY2xhcmF0aW9uIGZvciBwcm9wcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIFNjcmlwdExvYWRlciBjb21wb25lbnQsIGBpbXBvcnQgeyBTY3JpcHRMb2FkZXJQcm9wcyB9IGZyb20gJ3JlYWN0LXNjcmlwdC1sb2FkZXItMTgnYFxuICogQHBhcmFtIHNyYyBUaGUgc291cmNlIG9mIHRoZSBzY3JpcHQgdG8gYmUgbG9hZGVkLCBlLmcuICdodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanMnXG4gKiBAcGFyYW0gZGVsYXlNUyBBcnRpZmljYWxseSBhZGRzIGEgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLCBidXQgYmVmb3JlIHRoZSBzY3JpcHQgdGFnIGlzIGFwcGVuZGVkIHRvIHRoZSBkb2N1bWVudC4gVXNlZnVsIGZvciBzY3JpcHRzIHRoYXQgYXJlIG5vdCBuZWNlc3NhcnkgZWFybHkgb24sIGFuZCBtYXkgY29uZmxpY3Qgb24gdGhlIGJyb3dzZXIncyByZXF1ZXN0LWxpbWl0LlxuICogQHBhcmFtIG9uQ3JlYXRlIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQganVzdCByaWdodCBhZnRlciB0aGUgc2NyaXB0IHRhZyBoYXMgYmVlbiBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnQuXG4gKiBAcGFyYW0gb25Mb2FkIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvYWRlZC5cbiAqIEBwYXJhbSBvbkVycm9yIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGlmIHRoZSBzY3JpcHQgZmFpbHMgdG8gbG9hZC5cbiAqIEBwYXJhbSBvblN1Y2Nlc3MgVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgaWYgdGhlIHNjcmlwdCBpcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlxuICogQHBhcmFtIHJlbmRlciBUaGlzIGlzIGFuIG9wdGlvbmFsIEpTWC5FbGVtZW50IHRoYXQgcmVuZGVycy5cbiAqIEBwYXJhbSBkZWJ1ZyBUaGlzIGlzIGEgYm9vbGVhbiBmbGFnIHRoYXQgZW5hYmxlcyBkZWJ1ZyBtb2RlLiBJdCB3aWxsIGxvZyB0byB0aGUgY29uc29sZSB0aGUgZXZlbnRzIHRoYXQgYXJlIHRyaWdnZXJlZC5cbiAqIEBleGFtcGxlIGBgXG4gKiBpbXBvcnQgeyBTY3JpcHRMb2FkZXJQcm9wcyB9IGZyb20gJ3JlYWN0LXNjcmlwdC1sb2FkZXItMTgnO1xuICogY29uc3QgcHJvcHM6IFNjcmlwdExvYWRlclByb3BzID1cbiAqIHtcbiAqICAgc3JjOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzJyxcbiAqICAgZGVsYXlNczogMTAwMCwgb25DcmVhdGU6ICgpID0+IHsgY29uc29sZS5sb2coJ1NjcmlwdCBjcmVhdGVkIScpIH0sXG4gKiAgIG9uTG9hZDogKGU6IEV2ZW50KSA9PiB7IGNvbnNvbGUubG9nKCdTY3JpcHQgbG9hZGVkIScpIH0sXG4gKiAgIG9uRXJyb3I6IChlOiBFdmVudCB8IHN0cmluZykgPT4geyBjb25zb2xlLmxvZygnU2NyaXB0IGZhaWxlZCB0byBsb2FkIScpIH0sXG4gKiAgIG9uU3VjY2VzczogKCkgPT4geyBjb25zb2xlLmxvZygnU2NyaXB0IGxvYWRlZCBzdWNjZXNzZnVsbHkhJykgfSxcbiAqICAgZGVidWc6IHRydWUsXG4gKiAgIGlkOiBKU1guRWxlbWVudCB0YWcgaWQsXG4gKiAgIHJlbmRlcjogPD48c3R5bGU+IHtgaDM6aG92ZXIge3Zpc2liaWxpdHk6IHZpc2libGU7fWB9IDwvc3R5bGU+XG4gKiAgPGgzIHN0eWxlPXt7dmlzaWJpbGl0eTpoaWRkZW59fT5TY3JpcHQgbG9hZGVkISBBTUFaT04gTEVHQUwsXG4gKiAgPGEgdGFyZ2V0PSdfYmxhbmsnIHN0eWxlPXt7dGV4dERlY29yYXRpb246IG5vbmV9fSBocmVmPSdodHRwczovL2xpdS5hY2FkZW15L3N0YWtlaG9sZGVyL2xldHRlcic+V0hFUkUgQVJFIE1ZIFdBR0VTXG4gKiAgPC9hPiA8L2gzPiA8Lz5cbiAqIH1cbiAqIGBgXG4gKi9cbmV4cG9ydCB0eXBlIFNjcmlwdExvYWRlclByb3BzID0ge1xuICAgIGRlbGF5TXM/OiBudW1iZXI7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgb25DcmVhdGU/OiAoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZDtcbiAgICBvbkVycm9yPzogKFxuICAgICAgICBldmVudD86IHN0cmluZyB8IEV2ZW50IHwgRXJyb3IsXG4gICAgICAgIHNvdXJjZT86IHN0cmluZyxcbiAgICAgICAgbGluZW5vPzogbnVtYmVyLFxuICAgICAgICBjb2xubz86IG51bWJlcixcbiAgICAgICAgZXJyb3I/OiBFcnJvclxuICAgICkgPT4gdm9pZDtcbiAgICBvblN1Y2Nlc3M/OiAoKSA9PiB2b2lkO1xuICAgIG9uTG9hZD86IChldmVudD86IEV2ZW50KSA9PiB2b2lkO1xuICAgIGRlYnVnPzogYm9vbGVhbjtcbiAgICByZW5kZXI/OiBKU1guRWxlbWVudDtcbiAgICByZW5kZXJTY3JpcHQ/OiBib29sZWFuO1xuICAgIHNyYzogc3RyaW5nO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG4iXSwibmFtZXMiOlsicmVhY3RfMSIsIl9faW1wb3J0RGVmYXVsdCIsInJlcXVpcmUiLCJTY3JpcHRUYWciLCJkZWZhdWx0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN1cGVyIiwidGhpcyIsInN0YXRlIiwiZGVsYXlNcyIsInNyYyIsInRpbWVvdXQiLCJyZW5kZXIiLCJpZCIsInJlbmRlclNjcmlwdCIsInVwZGF0ZWQiLCJjb21wb25lbnREaWRNb3VudCIsImJpbmQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIl9hcHBlbmRTY3JpcHQiLCJvbkNyZWF0ZSIsIm9uTG9hZCIsIm9uRXJyb3IiLCJvblN1Y2Nlc3MiLCJsb2ciLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJtc2ciLCJzdHlsZSIsImluZGVudCIsImRlYnVnIiwiaW5kZW50U3RyIiwicmVwZWF0IiwiY29uc29sZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNsZWFyVGltZW91dCIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImUiLCJPYmplY3QiLCJrZXlzIiwib3RoZXJQcm9wc0tleXMiLCJmaWx0ZXIiLCJwcm9wIiwic2NyaXB0UHJvcEtleXMiLCJpbmNsdWRlcyIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwibGVuZ3RoIiwiYXR0ciIsInZhbHVlIiwiZW50cmllcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjdXN0b21PbkxvYWQiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjZEQUEwQkEs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