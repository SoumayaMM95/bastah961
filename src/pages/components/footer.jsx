import Image from 'next/image';
import Link from 'next/link';
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import logo from '../../../public/images/resized-image.png';

function Footer() {
  return (
  <>

    <div className="container">
        <footer className="py-3 my-4">
            <div className="text-center border-bottom pb-3 mb-3">
            <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <Image
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block mb-2"
            />{' '}
            BASTAH961
            </Link>
            <span className="mb-3 mb-md-0 text-muted">&copy; 2023 Company, Inc</span>
            </div>

            <ul className="nav justify-content-center gap-5 list-unstyled d-flex fs-4">
                <li><Link className="text-muted" href="#"><BsFacebook /></Link></li>
                <li><Link className="text-muted" href="#"><BsInstagram /></Link></li>
                <li><Link className="text-muted" href="#"><BsWhatsapp /></Link></li>
            </ul>
        </footer>
    </div>
    
  </>
  );
}

export default Footer;