import AppSettings from "../objects/AppSettings";

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

  return (
    <dialog className="settings-modal">
      <form method="dialog" className="settings-modal" onSubmit={onSubmit}>
        <label>
          Daily Budget
          <input
            name="dailyBudgetInput"
            type="number"
            defaultValue={props.appSettings.dailyBudget}
          />
        </label>
        <label>
          <input
            name="currencyStringInput"
            type="text"
            defaultValue={props.appSettings.currencyString}
          />
        </label>
        <button>Save Settings</button>
      </form>
    </dialog>
  );
}
