const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-black-900 py-4 pt-20 dark:text-white text-sm sm:text-base text-center font-medium">
      <span className="gradient-text">Amine Elkhalidy</span>
      <br />
      &copy; {currentYear} - All Rights Reserved
    </p>
  );
};

export default Copyright;
