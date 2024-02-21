function ErrorPage() {
  return (
    <div className=" mx-auto mt-10">
      <div className="text-[100px] text-yellow-500 text-center">
        <ion-icon name="warning"></ion-icon>
      </div>
      <p className="text-3xl text-center">Page not found</p>
    </div>
  );
}

export default ErrorPage;
