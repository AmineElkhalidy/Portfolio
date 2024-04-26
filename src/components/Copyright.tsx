const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-black-900 py-4 pt-20 text-sm sm:text-base text-center font-medium">
      <span className="gradient-text font-medium underline">
        Amine Elkhalidy
      </span>
      <br />
      &copy; {currentYear} - All Rights Reserved
    </p>
  );
};

export default Copyright;
