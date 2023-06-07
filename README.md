# Float Plan and Safety Checklist Form
 The Float Plan and Safety Checklist Form is a web application built with React. It provides an internal solution for documenting the launch form and safety checklists.

## File Descriptions

- `main_live.js`: This file contains the main components responsible for managing the float plan and safety checklist. It imports and utilizes reusable components from `reusable.js` and data from `data.js` to create the user interface and handle user input. The `FloatComponent` handles the float plan section, allowing users to input details such as vessel information, departure time, and on-land contacts. The `SafeComponent` manages the safety checklist section, where users can certify the presence of safety equipment, operational equipment, and tested systems. The `ParentComponent` serves as the parent component that renders both the `FloatComponent` and `SafeComponent` to display the complete vessel management system.

- `reusable.js`: This file provides reusable components that are used throughout the application. It includes the following components:
  - `SelectComponent`: This component is a custom select dropdown that allows users to choose from a list of options. It is used in the float plan section to select the vessel, captain, and powertrain technician supervisor.
  - `Input_box`: This component is an input field with an outlined style. It is used in the float plan section to input details such as the date of launch, departure time, and trip description.
  - `Checklist`: This component is a set of checkboxes that allow users to select multiple options from a list. It is used in the safety checklist section to certify the presence of safety equipment, operational equipment, tested systems, and trailering safety steps.

- `data.js`: This file contains data arrays used in the application. It includes the following arrays:
  - `vessels`: An array of vessel options that users can select from in the float plan section.
  - `captains`: An array of captain options that users can select from in the float plan section.
  - `powertrainTechnicianSupervisors`: An array of powertrain technician supervisor options that users can select from in the float plan section.
  - `safetyEquipments`: An array of safety equipment options that are used in the safety checklist section.
  - `operationalEquipments`: An array of operational equipment options that are used in the safety checklist section.
  - `testedSystems`: An array of tested system options that are used in the safety checklist section.
  - `traileringSafetySteps`: An array of trailering safety step options that are used in the safety checklist section.

- `allboxstyles.js`: This file defines various styles used in the application. It includes the following style objects:
  - `boxStyle`: The style for the main container box that holds the float plan and safety checklist sections.
  - `titleBoxStyle`: The style for the title box at the top of each section.
  - `listStyle`: The style for the ordered list within each section.
  - `buttonStyle`: The style for the submit button at the bottom of each section.

- `App.js`: This file is the entry point of the application. It renders the `ParentComponent`, which wraps the `FloatComponent` and `SafeComponent` to display the complete vessel management system.
