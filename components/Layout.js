import Header from "./Header";
import Sidebar from "./Sidebar";


const Layout = ({children}) => {
  return (
    
  <>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 col-lg-12">
        <Header/>
      </div>
      <div className="col-md-2 col-lg-2">
        <Sidebar/>
      </div>

      <div className="col-md-10 col-lg-10 mt-4">
        {children}
      </div>
    </div>
  </div>
    
  </>
  
  )
};
export default Layout;
