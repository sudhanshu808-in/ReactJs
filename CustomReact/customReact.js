function customRender(reactElement,mainContainer){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML= reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.target)

    // mainContainer.appendChild(domElement)
    const domele= document.createElement(reactElement.type)
    domele.innerHTML=reactElement.children
    for (const prop in reactElement.props){
        if(prop== 'children' )continue;
        domele.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domele)
}



const reactElement = {
    type : 'a',
    props : { 
        href : 'https://google.com',
        target :'_blank'
    },
    children : 'click me to visit google'
}
const mainContainer=document.getElementById('root')


customRender(reactElement,mainContainer)
