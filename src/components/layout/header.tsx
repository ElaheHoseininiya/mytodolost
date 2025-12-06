import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="p-4">
      <div className="shadow-md bg-white">
        <div className="container mx-auto py-2">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={32}
                height={32}
                priority
              />
              <h1 className="text-lg font-semibold mr-4">وظایف من</h1>
            </div>
            <div className="flex items-center">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={32}
                height={32}
                loading="lazy"
              />
              <span className="mr-2">خوش آمدید</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
