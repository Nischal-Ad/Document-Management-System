import { Button, Card } from "flowbite-react";
import AdminSection from "../../../components/AdminSection";
import RecentUserTable from "../home/components/RecentUserTable";
const index = () => {
  return (
    <AdminSection>
      <>
        <div className="md:flex justify-around p-2">
          <div className="p-4 sm:ml-64 ">
            <Card className="text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4">
              <h5 className="text-2xl font-bold tracking-tight">
                <p>Total Documents</p>
              </h5>
              <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
                <span>2</span>
              </p>
              <Button>
                <p>Go to Documents</p>
              </Button>
            </Card>
          </div>

          <div className="p-4 sm:ml-64 ">
            <Card className="text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4">
              <h5 className="text-2xl font-bold tracking-tight">
                <p>Total Departments</p>
              </h5>
              <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
                <span>2</span>
              </p>
              <Button>
                <p>Go to Documents</p>
              </Button>
            </Card>
          </div>

          <div className="p-4 sm:ml-64 ">
            <Card className="text-center text-gray-700 w-full md:mx-4 md:mb-0 mb-4">
              <h5 className="text-2xl font-bold tracking-tight ">
                <p>Total Categories</p>
              </h5>
              <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
                <span>5</span>
              </p>
              <Button>
                <p>Go To Categories</p>
              </Button>
            </Card>
          </div>
        </div>
        <RecentUserTable />
      </>
    </AdminSection>
  );
};

export default index;
