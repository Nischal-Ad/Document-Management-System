import { Button, Card } from "flowbite-react";
import Section from "../../../components/Section";
import { HiOutlineArrowRight } from "react-icons/hi";

const AdminHome = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Card className="text-center text-gray-700">
          <h5 className="text-2xl font-bold tracking-tight">
            <p>Total Documents</p>
          </h5>
          <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
            <p>2</p>
          </p>
          <Button>
            <p>Go to Documents</p>
          </Button>
        </Card>

        <Card className="text-center text-gray-700">
          <h5 className="text-2xl font-bold tracking-tight ">
            <p>Total Categories</p>
          </h5>
          <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
            <p>5</p>
          </p>
          <Button>
            <p>Go To Categories</p>
          </Button>
        </Card>

        <Card className="text-center text-gray-700">
          <h5 className="text-2xl font-bold tracking-tight">
            <p>Total Departments</p>
          </h5>
          <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
            <p>2</p>
          </p>
          <Button>
            <p>Go To Departments</p>
          </Button>
        </Card>

        <Card className="text-center text-gray-700">
          <h5 className="text-2xl font-bold tracking-tight">
            <p>Total Users</p>
          </h5>
          <p className="font-bold text-3xl text-gray-700 dark:text-gray-400 text-center">
            <p>2</p>
          </p>
          <Button>
            <p>Go To Users</p>
          </Button>
        </Card>
      </div>
    </Section>
  );
};

export default AdminHome;
