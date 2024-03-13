import React from 'react';
import {redirect} from "next/navigation";

const Page = () => {
    redirect('/v3/signin')
    return (
        <div>
        </div>
    );
};

export default Page;