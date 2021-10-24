import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/CheckCircle';
import Note from '@material-ui/icons/Note';

const orders = [
  {
    id: uuid(),
    ref: 'Name',
    amount: 30.5,
    customer: {
      name: 'Kathy Johnson'
    },
    status: 'Valid'
  },
  {
    id: uuid(),
    ref: 'Email',
    amount: 25.1,
    customer: {
      name: 'kathy.johnson34@gmail.com'
    },
    status: 'Valid'
  },
  {
    id: uuid(),
    ref: 'Height',
    amount: 10.99,
    customer: {
      name: '5\'2'
    },
    status: 'Valid'
  },
  {
    id: uuid(),
    ref: 'Weight',
    amount: 96.43,
    customer: {
      name: '175 lbs'
    },
    status: 'Needs Approval'
  },
  {
    id: uuid(),
    ref: 'Cigarettes Smoked per Day',
    amount: 32.54,
    customer: {
      name: '0'
    },
    status: 'Valid'
  },
  {
    id: uuid(),
    ref: 'Past Birth Control Pill',
    amount: 16.76,
    customer: {
      name: 'None'
    },
    status: 'Valid'
  },
  {
    id: uuid(),
    ref: 'Did You Like It?',
    amount: 32.54,
    customer: {
      name: 'NULL'
    },
    status: 'Valid'
  },
  {
    id: uuid(),
    ref: 'Other Considerations',
    amount: 32.54,
    customer: {
      name: 'I am Breastfeeding'
    },
    status: 'Needs Approval'
  },
  {
    id: uuid(),
    ref: 'Blood Pressure',
    amount: 32.54,
    customer: {
      name: '122/83'
    },
    status: 'Valid'
  },
  {
    id: uuid(),
    ref: 'Type',
    amount: 32.54,
    customer: {
      name: 'Pill'
    },
    status: 'Valid'
  },
  {
    id: uuid(),
    ref: 'Order',
    amount: 32.54,
    customer: {
      name: 'Sprintec'
    },
    status: 'Valid'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Patient Intake" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 700 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Field
              </TableCell>
              <TableCell>
                Value
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Response
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={order.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<Note />}
        size="small"
        variant="text"
      >
        Leave Note in Patient Chart
      </Button>

      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Approve Order
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
