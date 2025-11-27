import RowOne from './_components/row-one';
import RowTwo from './_components/row-two';

const page = () => {
  return (
    <div className="p-2 space-y-4">
      <div className="grid grid-cols-4 gap-2">
        <RowOne />
      </div>
      <div className="grid grid-cols-1">
        <RowTwo />
      </div>
    </div>
  );
};

export default page;
