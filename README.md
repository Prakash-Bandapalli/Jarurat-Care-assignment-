
# HealthCare Services Manager

A simple React application to manage healthcare services. The app allows users to view, add, update, and delete healthcare services such as routine checkups, lab tests, and more. Each service includes a name, description, and price, with validation for proper input handling.

## Features

- **Add New Services**: Create a new healthcare service by providing the name, description, and price. Price validation ensures only valid numeric input.
- **Edit Services**: Modify any existing service by updating its details.
- **Delete Services**: Remove any service from the list.
- **Service Display**: View a list of all healthcare services with their respective details.
- **Validation with Toast**: Input validation for all forms is handled using `react-hot-toast` for a better user experience.

## Technologies Used

- **React**: Frontend library used for creating the UI.
- **React Hooks**: For managing component state (useState) and lifecycle (useEffect).
- **Tailwind CSS**: For styling the UI.
- **React Icons**: Used for icons like the close button.
- **react-hot-toast**: For form validation notifications.
  
## Deployment

The application is live at: [HealthCare Services Manager](https://crud-health.netlify.app)

## Installation

To run the app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/healthcare-services-manager.git
   ```

2. Navigate into the project directory:
   ```bash
   cd healthcare-services-manager
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

## Usage

- **Add a new service** by clicking the "Add New Service" button, filling in the details, and clicking "Add Service."
- **Edit a service** by clicking the edit button (pencil icon) next to the service and updating its information.
- **Delete a service** by clicking the delete button (trash icon).

## Validation Rules

- The **service name** and **description** are mandatory fields.
- The **price** must be a valid positive number, otherwise, an error toast will notify you.
