import AppSettings from "../objects/AppSettings";
import CloseDialogButton from "./CloseDialogButton";

interface SettingModalProps {
  appSettings: AppSettings;
  onSubmit: (appSettings: AppSettings) => void;
}

export default function SettingsModal(props: SettingModalProps) {
  const onSubmit = (event: any) => {
    const dailyBudget: number = event.target.dailyBudgetInput.value;
    const currencyString: string = event.target.currencyStringInput.value;
    const appSettings = new AppSettings(dailyBudget, currencyString);

    props.onSubmit(appSettings);
  };

  const dialogClass = "settings-modal";

  return (
    <dialog className={dialogClass}>
      <CloseDialogButton dialogClass={dialogClass} />
      <form method="dialog" className="settings-modal" onSubmit={onSubmit}>
        <label>Daily Budget:</label>

        <input
          name="dailyBudgetInput"
          type="number"
          defaultValue={props.appSettings.dailyBudget}
        />
        <label>Currency String:</label>

        <input
          name="currencyStringInput"
          type="text"
          defaultValue={props.appSettings.currencyString}
        />
        <button>Save Settings</button>
      </form>
    </dialog>
  );
}
