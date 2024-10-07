import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ProcessListView } from "./views/process/ProcessListView";
import { SystemMonitorView } from "./views/system/SystemMonitorView";

function App() {
  return (
    <div className="dark bg-background w-screen h-screen p-4">
      <Tabs
        defaultValue="system"
        className="flex flex-col items-center w-full h-full"
      >
        <TabsList className="flex justify-center items-center w-fit">
          <TabsTrigger value="processes">Processes</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
        <TabsContent
          value="processes"
          className="text-white w-full h-full p-4 rounded-md bg-card ring-2 ring-accent mt-4 overflow-x-hidden"
        >
          <ProcessListView></ProcessListView>
        </TabsContent>

        <TabsContent
          value="system"
          className="text-white w-full h-full p-4 rounded-md bg-card ring-2 ring-accent mt-4"
        >
          <SystemMonitorView></SystemMonitorView>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
