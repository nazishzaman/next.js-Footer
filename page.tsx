import {useRouter} from "next/router";
import link from "next/link";

const Footer = () => {
    const route = useRouter();
    return(
        <div>
            <link href="/">Footer</link>
            <h1>Welcome to homepage</h1>
            <button/>
            <footer/>
        </div>
    );
}

export default Footer