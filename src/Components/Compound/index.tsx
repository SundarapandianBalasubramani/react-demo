import React, { createContext, PropsWithChildren, useContext } from "react";
import { Blog } from "./Blog";
import { data } from "./data";

export const BlogContext = createContext<Blog>(data);

export const CompoundContext:React.FC<PropsWithChildren> = ({children}) => {
    return (
        <BlogContext.Provider value={data}>
            {children}
        </BlogContext.Provider>
    )
}


export const Title = () => {
    const blog = useContext(BlogContext);
    return <h1>{blog.title}</h1>;
  };
  
  export const Author = () => {
    const blog = useContext(BlogContext);
    return <p>{blog.author}</p>;
  };
  
  export const Dat = () => {
    const blog = useContext(BlogContext);
    return <p>{blog.date}</p>;
  };
  
  export const Description = () => {
    const blog = useContext(BlogContext);
    return <p>{blog.description}</p>;
  };

  export const Compound: React.FC = () => {
    return (
      <CompoundContext>      
        <Title />
        <Description />
        <Author />
        <Dat />
        
      </CompoundContext>
    );
  };