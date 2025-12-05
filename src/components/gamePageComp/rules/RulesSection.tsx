const RulesSection = () => {
  return (
    <section className="bg-pink-100 flex flex-col p-5 w-fit rounded-xl shadow-sm">
      <h1 className="font-bold text-2xl py-5">How to play dice game</h1>
      <ul className="text-[0.75rem] space-y-1.5 font-semibold">
        <li>Select any number.</li>
        <li>Click on dice image.</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice.
        </li>
        <li>If you get wrong then 2 point will be deducted.</li>
      </ul>
    </section>
  );
};

export default RulesSection;
