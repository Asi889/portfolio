// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import InformationIcaon from '../images/InformationIcon';
// import NavBar from '../navbar/NavBar';

const Layout = function ({ children }) {
//   const { pathname } = useRouter();
  return (
    <section className="">      
        <NavBar /> 
      <main className="">{children}</main>
      {/* <InformationIcaon /> */}
    </section>
  );
};

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
