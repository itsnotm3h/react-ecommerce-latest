//component in react must be:
// 1. first aphabet to upper case;
// 2. return JSx.
// 3. The name of the file that holds the component should have the same name as the function
//4. if component is its own file it must be exported.

//propos are paramenter pass through form the component. 

export default function Footer(){

    return(
      <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>
    )
  }

  