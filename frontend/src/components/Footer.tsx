const Footer = () => {
    return (
      <div className="bg-blue-900 py-10">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-3xl text-white font-bold tracking-tight">
            MernHolidays.com
          </span>
          <span className="text-white font-bold tracking-tight flex gap-4">
            <p className="cursor-pointer">Quy định bảo mật</p>
            <p className="cursor-pointer">Điều khoản dịch vụ</p>
          </span>
        </div>
      </div>
    );
  };
  
  export default Footer;