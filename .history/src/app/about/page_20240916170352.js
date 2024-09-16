export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-lg">
        Developed by Akia is a web development and branding agency dedicated to
        helping businesses establish a strong online presence. With a focus on
        accessibility and user experience, we craft custom solutions tailored to
        our clients' needs.
      </p>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="mt-4 text-lg">
          Our mission is to empower businesses with high-quality, accessible web
          solutions that not only look great but also provide exceptional user
          experiences.
        </p>
      </div>
    </div>
  );
}
