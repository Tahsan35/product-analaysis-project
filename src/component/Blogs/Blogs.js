
const Blogs = () => {
    return (
        <div className=' mx-auto mt-16 mb-16' >
        <div className='flex flex-col justify-center gap-8'>
            <div className='mx-auto border p-4 '>
                <h1 className=' mb-4'>What is Context API?</h1>
                <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
                </p>
            </div>
            <div className='border p-4'> 
                <h1 className=' mb-4'>What is a semantic tag?
                </h1>
                <p>
                In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have".The word semantic is anything related to meaning. Following this definition, An HTML semantic element is an element with some type of meaning.These elements are semantic because they define some specific portion of the webpage.
                </p>
            </div>
        </div>
    </div>
);
};


export default Blogs;