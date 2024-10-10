import { AppComponent} from "./app.component";
import { NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import { BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from "./components/studentlist/studentlist.component";
import { EmployeelistComponent } from "./components/employeelist/employeelist.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { FruitlistComponent } from "./components/fruitlist/fruitlist.component";
import { CourseListComponent } from "./components/courselist/courselist.component";
import { BooklistComponent } from "./components/booklist/booklist.component";
import { CitylistComponent } from "./components/citylist/citylist.component";
import { MovielistComponent } from "./components/movielist/movielist.component";
import { CarmodellistComponent } from "./components/carmodellist/carmodellist.component";
import { ProductlistComponent } from "./components/productlist/productlist.component";
import { SubjectlistComponent } from "./components/subjectlist/subjectlist.component";
import { CountryListComponent } from "./components/countrylist/countrylist.component";
import { SportslistComponent } from "./components/sportslist/sportslist.component";
import { VegetablelistComponent } from "./components/vegetablelist/vegetablelist.component";
import { AnimallistComponent } from "./components/animallist/animallist.component";
import { ToollistComponent } from "./components/toollist/toollist.component";
import { LanguagelistComponent } from "./components/languagelist/languagelist.component";
import { GamelistComponent } from "./components/gamelist/gamelist.component";
import { SoftwarelistComponent } from "./components/softwarelist/softwarelist.component";
import { PhonecontactlistComponent } from "./components/phonecontactlist/phonecontactlist.component";
import { MusicplaylistComponent } from "./components/musicplaylist/musicplaylist.component";
import { FoodmenuComponent } from "./components/foodmenu/foodmenu.component";
import { GrocerylistComponent } from "./components/grocerylist/grocerylist.component";
import { ClassroomlistComponent } from "./components/classroomlist/classroomlist.component";
import { InventorylistComponent } from "./components/inventorylist/inventorylist.component";
import { LecturelistComponent } from "./components/lecturelist/lecturelist.component";
import { StationerylistComponent } from "./components/stationerylist/stationerylist.component";
import { FlowerlistComponent } from "./components/flowerlist/flowerlist.component";
import { DestinationlistComponent } from "./components/destinationlist/destinationlist.component";
import { LaptoplistComponent } from "./components/laptoplist/laptoplist.component";
import { LaptopspecificationslistComponent } from "./components/laptopspecificationslist/laptopspecificationslist.component";
import { PodcastlistComponent } from "./components/podcastlist/podcastlist.component";
import { ExerciselistComponent } from "./components/exerciselist/exerciselist.component";
import { MealplanlistComponent } from "./components/mealplanlist/mealplanlist.component";
import { BudgetlistComponent } from "./components/budgetlist/budgetlist.component";
import { PresentationlistComponent } from "./components/presentationlist/presentationlist.component";
import { TourlistComponent } from "./components/tourlist/tourlist.component";
import { EventlistComponent } from "./components/eventlist/eventlist.component";
import { DevelopertoolslistComponent } from "./components/developertoolslist/developertoolslist.component";
import { FrameworklistComponent } from "./components/frameworklist/frameworklist.component";
import { LibrarylistComponent } from "./components/librarylist/librarylist.component";
import { ComputerhardwarelistComponent } from "./components/computerhardwarelist/computerhardwarelist.component";
import { MobileapplistComponent } from "./components/mobileapplist/mobileapplist.component";
import { VideolistComponent } from "./components/videolist/videolist.component";
import { TvshowlistComponent } from "./components/tvshowlist/tvshowlist.component";
import { FurniturelistComponent } from "./components/furniturelist/furniturelist.component";
import { AccessorylistComponent } from "./components/accessorylist/accessorylist.component";
import { BuildinglistComponent } from "./components/buildinglist/buildinglist.component";
import { PaintinglistComponent } from "./components/paintinglist/paintinglist.component";
import { ArtistlistComponent } from "./components/artistlist/artistlist.component";
import { ComposerlistComponent } from "./components/composerlist/composerlist.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'studentlist', component: StudentListComponent},
  {path: 'employeelist', component: EmployeelistComponent},
  {path: 'fruitlist', component: FruitlistComponent},
  {path: 'booklist', component: BooklistComponent},
  {path: 'courselist', component: CourseListComponent},
  {path: 'citylist', component: CitylistComponent},
  {path: 'movielist', component: MovielistComponent},
  {path: 'carmodellist', component: CarmodellistComponent},
  {path: 'productlist', component: ProductlistComponent},
  {path: 'subjectlist', component: SubjectlistComponent},
  {path: 'countrylist', component: CountryListComponent},
  {path: 'sportlist', component: SportslistComponent},
  {path: 'vegetablelist', component: VegetablelistComponent},
  {path: 'animallist', component: AnimallistComponent},
  {path: 'toollist', component: ToollistComponent},
  {path: 'languagelist', component: LanguagelistComponent},
  {path: 'gamelist', component: GamelistComponent},
  {path: 'softwarelist', component: SoftwarelistComponent},
  {path: 'phonecontactlist', component: PhonecontactlistComponent},
  {path: 'musicplaylist', component: MusicplaylistComponent},
  {path: 'foodmenu', component: FoodmenuComponent},
  {path: 'grocerylist', component: GrocerylistComponent},
  {path: 'classroomlist', component: ClassroomlistComponent},
  {path: 'inventorylist', component: InventorylistComponent},
  {path: 'lecturelist', component: LecturelistComponent},
  {path: 'stationerylist', component: StationerylistComponent},
  {path: 'flowerlist', component: FlowerlistComponent},
  {path: 'destinationlist', component: DestinationlistComponent},
  {path: 'laptoplist', component: LaptoplistComponent},
  {path: 'laptopspecificationslist', component: LaptopspecificationslistComponent},
  {path: 'computerhardwarelist', component: ComputerhardwarelistComponent},
  {path: 'mobileapplist', component: MobileapplistComponent},
  {path: 'videolist', component: VideolistComponent},
  {path: 'tvshowlist', component: TvshowlistComponent},
  {path: 'furniturelist', component: FurniturelistComponent},
  {path: 'accessorylist', component: AccessorylistComponent},
  {path: 'buildinglist', component: BuildinglistComponent},
  {path: 'paintinglist', component: PaintinglistComponent},
  {path: 'artistlist', component: ArtistlistComponent},
  {path: 'composerlist', component: ComposerlistComponent},
  {path: 'podcastlist', component: PodcastlistComponent},
  {path: 'exerciselist', component: ExerciselistComponent},
  {path: 'mealplanlist', component: MealplanlistComponent},
  {path: 'budgetlist', component: BudgetlistComponent},
  {path: 'presentationlist', component: PresentationlistComponent},
  {path: 'tourlist', component: TourlistComponent},
  {path: 'eventlist', component: EventlistComponent},
  {path: 'developertoolslist', component: DevelopertoolslistComponent},
  {path: 'frameworklist', component: FrameworklistComponent},
  {path: 'librarylist', component: LibrarylistComponent},
    
]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],

  declarations: [
    AppComponent,
    HomepageComponent,
    StudentListComponent,
    EmployeelistComponent,
    FruitlistComponent,
    CourseListComponent,
    BooklistComponent,
    CitylistComponent,
    MovielistComponent,
    CarmodellistComponent,
    ProductlistComponent,
    SubjectlistComponent,
    CountryListComponent,
    SportslistComponent,
    VegetablelistComponent,
    AnimallistComponent,
    ToollistComponent,
    LanguagelistComponent,
    GamelistComponent,
    SoftwarelistComponent,
    PhonecontactlistComponent,
    MusicplaylistComponent,
    FoodmenuComponent,
    GrocerylistComponent,
    ClassroomlistComponent,
    InventorylistComponent,
    LecturelistComponent,
    StationerylistComponent,
    FlowerlistComponent,
    DestinationlistComponent,
    LaptoplistComponent,
    LaptopspecificationslistComponent,
    ComputerhardwarelistComponent,
    MobileapplistComponent,
    VideolistComponent,
    TvshowlistComponent,
    FurniturelistComponent,
    AccessorylistComponent,
    BuildinglistComponent,
    PaintinglistComponent,
    ArtistlistComponent,
    ComposerlistComponent,
    PodcastlistComponent,
    ExerciselistComponent,
    MealplanlistComponent,
    BudgetlistComponent,
    PresentationlistComponent,
    TourlistComponent,
    EventlistComponent,
    DevelopertoolslistComponent,
    FrameworklistComponent,
    LibrarylistComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent]
})

export class AppModule {}