﻿



CREATE TABLE "КлассВредФакт"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СписокНаМедосм"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерДок" NUMBER(10) NULL,

	"Дата" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КонтингентСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Женщины" NUMBER(10) NULL,

	"Всего" NUMBER(10) NULL,

	"До21Года" NUMBER(10) NULL,

	"Мужчины" NUMBER(10) NULL,

	"Периодичность" NVARCHAR2(11) NULL,

	"КлассВредФакт" RAW(16) NOT NULL,

	"ПриказМЗР" RAW(16) NOT NULL,

	"Подразделения" RAW(16) NOT NULL,

	"СписокНаМедосм" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерПаспорта" NUMBER(10) NULL,

	"ДатаРождения" DATE NULL,

	"СерияПаспорта" NUMBER(10) NULL,

	"Пол" NVARCHAR2(7) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"IDСотрудника" NUMBER(10) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ИндНапрМедосм"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"НомерДок" NUMBER(10) NULL,

	"Организация" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"МедУчреждение" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "МедУчреждение"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Подразделения"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"IDДолжности" NUMBER(10) NULL,

	"Подразделения" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВреднФактПроиз"
(

	"primaryKey" RAW(16) NOT NULL,

	"КлассВредФакт" RAW(16) NOT NULL,

	"ИндНапрМедосм" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПриказМЗР"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерПункта" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	"ОГРН" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"Почта" NVARCHAR2(255) NULL,

	"ЮрАдрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "КонтингентСотр"
	ADD CONSTRAINT "КонтингентСо_7211" FOREIGN KEY ("КлассВредФакт") REFERENCES "КлассВредФакт" ("primaryKey");

CREATE INDEX "КонтингентСо_3968" on "КонтингентСотр" ("КлассВредФакт");

ALTER TABLE "КонтингентСотр"
	ADD CONSTRAINT "КонтингентСот_872" FOREIGN KEY ("ПриказМЗР") REFERENCES "ПриказМЗР" ("primaryKey");

CREATE INDEX "КонтингентСо_5023" on "КонтингентСотр" ("ПриказМЗР");

ALTER TABLE "КонтингентСотр"
	ADD CONSTRAINT "КонтингентСо_7559" FOREIGN KEY ("Подразделения") REFERENCES "Подразделения" ("primaryKey");

CREATE INDEX "КонтингентСо_1898" on "КонтингентСотр" ("Подразделения");

ALTER TABLE "КонтингентСотр"
	ADD CONSTRAINT "КонтингентСо_2436" FOREIGN KEY ("СписокНаМедосм") REFERENCES "СписокНаМедосм" ("primaryKey");

CREATE INDEX "КонтингентСо_4438" on "КонтингентСотр" ("СписокНаМедосм");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6967" on "Сотрудники" ("Должности");

ALTER TABLE "ИндНапрМедосм"
	ADD CONSTRAINT "ИндНапрМедос_9919" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ИндНапрМедосм_675" on "ИндНапрМедосм" ("Организация");

ALTER TABLE "ИндНапрМедосм"
	ADD CONSTRAINT "ИндНапрМедос_6747" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ИндНапрМедос_4260" on "ИндНапрМедосм" ("Сотрудники");

ALTER TABLE "ИндНапрМедосм"
	ADD CONSTRAINT "ИндНапрМедос_5978" FOREIGN KEY ("МедУчреждение") REFERENCES "МедУчреждение" ("primaryKey");

CREATE INDEX "ИндНапрМедос_7679" on "ИндНапрМедосм" ("МедУчреждение");

ALTER TABLE "Должности"
	ADD CONSTRAINT "Должности_FПо_5677" FOREIGN KEY ("Подразделения") REFERENCES "Подразделения" ("primaryKey");

CREATE INDEX "Должности_IПо_4811" on "Должности" ("Подразделения");

ALTER TABLE "ВреднФактПроиз"
	ADD CONSTRAINT "ВреднФактПро_2739" FOREIGN KEY ("КлассВредФакт") REFERENCES "КлассВредФакт" ("primaryKey");

CREATE INDEX "ВреднФактПро_7104" on "ВреднФактПроиз" ("КлассВредФакт");

ALTER TABLE "ВреднФактПроиз"
	ADD CONSTRAINT "ВреднФактПро_6372" FOREIGN KEY ("ИндНапрМедосм") REFERENCES "ИндНапрМедосм" ("primaryKey");

CREATE INDEX "ВреднФактПро_8441" on "ВреднФактПроиз" ("ИндНапрМедосм");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


