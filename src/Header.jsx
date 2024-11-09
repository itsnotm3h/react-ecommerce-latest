//component in react must be:
// 1. first aphabet to upper case;
// 2. return JSx.
// 3. The name of the file that holds the component should have the same name as the function
//4. if component is its own file it must be exported.

//propos are paramenter pass through form the component. 

export default function Header(props){

    return(
      <header className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">Discover amazing products at unbeatable prices!</p>
        <a href={props.showNowLink} className="btn btn-light btn-lg">Shop Now</a>
      </div>
    </header>
    )
  }

  