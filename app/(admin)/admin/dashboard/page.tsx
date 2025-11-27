import RowOne from './_components/row-one';
import RowThree from './_components/row-three';
import RowTwo from './_components/row-two';

const DashboardPage = () => {
  return (
    <div className="p-2 space-y-4">
      <div className="grid grid-cols-4 gap-2">
        <RowOne />
      </div>
      <div className="grid grid-cols-6 gap-2">
        <RowTwo />
      </div>
      <div className="grid grid-cols-5 gap-2">
        <RowThree />
      </div>
    </div>
  );
};

export default DashboardPage;
